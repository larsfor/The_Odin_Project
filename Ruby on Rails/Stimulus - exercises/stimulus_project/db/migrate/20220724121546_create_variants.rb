class CreateVariants < ActiveRecord::Migration[7.0]
  def change
    create_table :variants do |t|
      t.string :model
      t.string :color
      t.integer :seats
      t.integer :horsepower
      t.integer :engine_volume
      t.references :car, null: false, foreign_key: true

      t.timestamps
    end
  end
end
