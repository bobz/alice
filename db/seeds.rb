# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#

def run_all_seeds
	# call all the methods
	Seed.singleton_methods(false).each do |method|
		Seed.send(method)
	end
end

Dir.glob(Rails.root.to_s + '/db/seeds/*.rb').each { |file| require file }


run_all_seeds
