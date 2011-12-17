object @account

attributes :id, :name, :owner_id, :description, :group_id

child :line_items do
  attributes :id, :short_desc, :long_desc, :eff_date, :owner_id
end
