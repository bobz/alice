class Seed
  def self.clean
    User.delete_all
    Group.delete_all
  end

	def self.users
    
    User.create!([
      { email: 'user1@justalicious.com', password: 'please' },
      { email: 'user2@justalicious.com', password: 'please' },
      { email: 'user3@justalicious.com', password: 'please' }
    ])
  end

  def self.groups
    u1 = User.where("email LIKE 'user1%'")
    u2 = User.where("email LIKE 'user2%'")
    u3 = User.where("email LIKE 'user3%'")

    Group.create!([
      { owner_id: u1.id, name: 'group1' },
      { owner_id: u2.id, name: 'group2' },
      { owner_id: u3.id, name: 'group3' }
    ])

    Group.where(name: 'group1').users << u2
    Group.where(name: 'group2').users << u3
    Group.where(name: 'group3').users << u1
  end
end
