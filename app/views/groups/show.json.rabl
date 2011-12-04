object @group

attributes :id, :name, :owner_id

child :users do
  attributes :id, :email
end
