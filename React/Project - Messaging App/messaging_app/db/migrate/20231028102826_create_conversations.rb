class CreateConversations < ActiveRecord::Migration[7.0]
  def change
    create_table :conversations do |t|
      t.integer :starter_id

      t.timestamps
    end
  end
end
