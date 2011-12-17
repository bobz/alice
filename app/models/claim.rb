class Claim < ActiveRecord::Base
  belongs_to :line_item
  belongs_to :claim_type
  belongs_to :group
end
