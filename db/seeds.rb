# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#

User.delete_all
Group.delete_all

bobz = User.create!({
  email: 'bobz@bobz.in',
  password: 'please'
})

jay = User.create!({
  email: 'jay@jaybobzin.com',
  password: 'please'
})

brendon = User.create!({
  email: 'bobzin44@gmail.com',
  password: 'please'
})

Group.create!([
{
  owner_id: bobz.id,
  name: 'Default'
},
{
  owner_id: bobz.id,
  name: 'Tri'
}]).each { |group| group.users << [bobz, jay, brendon] }


