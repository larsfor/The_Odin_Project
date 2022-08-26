class AddChecksToPosts < ActiveRecord::Migration[7.0]
  def change
    def up
      change_column :posts, :num_likes, null: false, default: 0
    end
    # back to previous version
    def down
      change_column :posts, :num_likes
    end
  end
end
