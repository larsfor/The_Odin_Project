class AddModelToVariants < ActiveRecord::Migration[7.0]
  def change
    add_column :variants, :model, :string
  end
end
