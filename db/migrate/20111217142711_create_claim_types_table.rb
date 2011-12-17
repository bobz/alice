class CreateClaimTypesTable < ActiveRecord::Migration
  def change
    create_table :claim_types do |t|
      t.string :string_ref
      t.string :description

      t.timestamps
    end
  end

end
