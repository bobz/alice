class AddHiddenToGroups < ActiveRecord::Migration
  def change
    add_column :groups, :hidden, :boolean, :default => 0
    add_column :users, :id_group_id, :integer 
  end
end
