class AddEventAttendeeIdToEventAttending < ActiveRecord::Migration[7.0]
  def change
    add_column :event_attendings, :event_attendee_id, :integer, null: :false
    add_foreign_key :event_attendings, :users, column: :event_attendee_id
  end
end
