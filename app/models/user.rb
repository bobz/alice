class User < ActiveRecord::Base
  include Clearance::User

  has_many :groups, :foreign_key => "owner_id"
  has_and_belongs_to_many :memberships, :class_name => 'Group',
    :join_table => 'groups_users', :association_foreign_key => 'group_id'
  has_many :tasks

  belongs_to :id_group, :class_name => 'Group'

  after_create :create_id_group

  def create_id_group
    self.id_group = Group.create(name: self.email, hidden: 1, owner: self)
    self.id_group.save
    self.save
    # self.memberships << id_group
    # self.save
  end

  
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
