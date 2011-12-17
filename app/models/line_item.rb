class LineItem < ActiveRecord::Base
  belongs_to :owner, :class_name => 'User'
  belongs_to :account

  has_many :claims
end
