class CreateGroup < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.belongs_to :owner, :null => false
      t.string :name

      t.timestamps
    end
  end
end
