class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items do |t|
      t.references :account, :null => false
      t.string :short_desc
      t.string :long_desc
      t.datetime :eff_date
      t.references :owner, :null => false

      t.timestamps
    end
  end
end
