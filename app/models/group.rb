class Group < ActiveRecord::Base

  belongs_to :owner, :class_name => 'User'
  has_and_belongs_to_many :users

  def as_json( options={} ) 
    {
      id: self.id,
      name: self.name,
      owner: self.owner,
      users: self.users
    }
  end

end
