class User < ActiveRecord::Base
  include Clearance::User

  has_and_belongs_to_many :groups
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
