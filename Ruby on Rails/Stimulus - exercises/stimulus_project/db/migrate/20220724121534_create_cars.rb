class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.integer :variation_id

      t.timestamps
    end
  end
end
