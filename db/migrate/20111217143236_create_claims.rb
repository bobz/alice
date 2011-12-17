class CreateClaims < ActiveRecord::Migration
  def change
    create_table :claims do |t|
      t.references :line_item, :null => false
      t.references :group
      t.references :claim_type, :null => false
      t.decimal :quantity, :precision => 13, :scale => 4, :default => 0

      t.timestamps
    end
  end
end
