class AddFriendIdToFriendRequest < ActiveRecord::Migration[7.0]
  def change
    add_column :friend_requests, :friend_id, :bigint
  end
end
