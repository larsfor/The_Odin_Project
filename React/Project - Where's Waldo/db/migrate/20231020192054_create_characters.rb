class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.float :x
      t.float :y

      t.timestamps
    end
  end
end
