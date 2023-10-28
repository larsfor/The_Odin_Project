class CreateConversationAccepters < ActiveRecord::Migration[7.0]
  def change
    create_table :conversation_accepters do |t|
      t.integer :accepted_conversation_id
      t.integer :conversation_accepter_id

      t.timestamps
    end
  end
end
