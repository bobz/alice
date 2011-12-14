require 'rake'

namespace :alice do

  task :pre do
    @pre = true
  end
  task :post do
    @pre = false
    print_errs_and_fixes
  end

  def print_errs_and_fixes
    if (!@pre && @errors.size > 0) 
      err_str = "Found the following errors:"
      @errors.each do |error|
        err_str += "\n\t" + error
      end

      if (@fixes.size > 0)
        err_str += "\n\nTry the following fixes:"
        @fixes.each do |fix|
          err_str += "\n\t" + fix
        end
      end
      if (ENV['ALICE_AUTOFIX'])
        err_str += "\n\n Unfortunately, ALICE_AUTOFIX failed to correct all errors"
      else
        err_str += "\n\n ... or rerun your task with ALICE_AUTOFIX set"
      end
      raise err_str
    end
  end

  desc 'Perform general health check on DB'
  task :validate => 
  [
    :environment,
    'alice:pre',
    'alice:user:validate',
    'alice:post'
  ]

  namespace :user do

    desc 'Verify connections for every user in the db'
    task :validate => [ :environment] do
      @errors ||= []
      @fixes ||= []
      if (ENV["USER_EMAIL"])
        user_validate(::User.where(email: ENV["USER_EMAIL"] ) )
      else
        ::User.all.each { |user| user_validate(user) }
      end
      print_errs_and_fixes
    end

    def user_validate(user)
      puts "Validating #{user.to_s}"
      
       user_validate_id_group(user) 
    end

    def user_validate_id_group(user)
      if ( ! user.id_group )
        if (ENV['ALICE_AUTOFIX'])
          create_id_group(user)
        else
          @errors <<  "id_group not found for user: #{user.to_json}" 
          @fixes << "rake USER_EMAIL=\"#{user.email}\" alice:user:create_id_group"
          return
        end
      end

      if (! user.id_group.owner == user)
        @errors << "#{user.email} id_group is owned by #{user.id_group.owner.email}"
      end

      if (! user.id_group.users.size == 1 && user.id_group.users.first == user)
        @errors << "Only member of [ #{user.id_group.users} ] should be #{user.email}"
      end
    end

    desc 'Create id group for user'
    task :create_id_group => :environment do
      @errors ||= []
      @fixes ||= []
      if (ENV['USER_EMAIL'])
        user = ::User.where(email: ENV['USER_EMAIL']).first
        create_id_group(user)
      else
        @errors << "Need to specify a user." 
        @fixes << "rake USER_EMAIL=\"email\" alice:user:create_id_group"
      end
      print_errs_and_fixes
    end

    def create_id_group(user)
        puts "Creating id_group for: #{user.to_json}"
        if ! user.create_id_group
          @errors << "Failed to create id_group for " + user.to_json
        end
    end
  end
end
