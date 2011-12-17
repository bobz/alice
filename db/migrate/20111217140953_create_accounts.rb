class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.references :owner, :null => false
      t.string :name, :null => false
      t.string :description
      t.references :group, :null => false

      t.timestamps
    end
  end
end
