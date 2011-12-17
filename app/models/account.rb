class Account < ActiveRecord::Base
  belongs_to :owner, :class_name => 'User'
  belongs_to :group

  has_many :line_items

  before_create do 
    if (owner_id && !self.group_id)
      self.group = owner.id_group
    end
  end
end
