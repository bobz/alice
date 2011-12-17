class LineItem < ActiveRecord::Base
  belongs_to :owner, :class_name => 'User'
  belongs_to :account

  has_many :claims

  def as_json( options={} ) 
    {
      id: self.id,
      owner_id:  self.owner_id ,
      short_desc: self.short_desc,
      eff_date: self.eff_date,
    }
  end

end
