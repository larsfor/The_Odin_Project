class AddPeopleToUsers < ActiveRecord::Migration[7.0]
  def change
    add_reference :users, :people, index: true, foreign_key: { to_table: :users }
  end
end
