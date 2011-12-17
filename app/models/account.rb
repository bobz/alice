class Account < ActiveRecord::Base
  belongs_to :owner, :class_name => 'User'
  belongs_to :group

  has_many :line_items

  before_create do 
    if (owner_id && !self.group_id)
      self.group = owner.id_group
    end
  end

  def as_json( options={} ) 
    {
      id: self.id,
      name: self.name,
      description: self.description,
      owner_id:  self.owner_id ,
      group_id: self.group_id,
      line_items: self.line_items
    }
  end

end
