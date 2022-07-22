class CreateVariants < ActiveRecord::Migration[7.0]
  def change
    create_table :variants do |t|
      t.string :color
      t.integer :seats
      t.integer :horsepower
      t.integer :engine_volume

      t.timestamps
    end
  end
end
