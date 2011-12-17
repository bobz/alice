class AddHiddenToGroups < ActiveRecord::Migration
  def change
    add_column :groups, :hidden, :boolean, :default => false
    add_column :users, :id_group_id, :integer 
  end
end
