class User < ActiveRecord::Base
  include Clearance::User

  has_many :groups, :foreign_key => "owner_id"
  has_and_belongs_to_many :memberships, :class_name => 'Group',
    :join_table => 'groups_users', :association_foreign_key => 'group_id'
  has_many :tasks
  
  def as_json( options={} ) 
    {
      id: self.id,
      email: self.email
    }
  end

  def to_s 
    self.email
  end

end
