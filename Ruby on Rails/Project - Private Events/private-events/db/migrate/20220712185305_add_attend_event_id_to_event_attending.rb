class AddAttendEventIdToEventAttending < ActiveRecord::Migration[7.0]
  def change
    add_column :event_attendings, :attended_event_id, :integer, null: :false
    add_foreign_key :event_attendings, :events, column: :attended_event_id
  end
end
