object @group

attributes :id, :created_at, :updated_id, :name, :owner_id

child :users do
  attributes :id, :created_at, :updated_id, :email
end
