class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.datetime :date
      t.string :location
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
