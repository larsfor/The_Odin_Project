class CreateProjectforms < ActiveRecord::Migration[7.0]
  def change
    create_table :projectforms do |t|

      t.timestamps
    end
  end
end
