class AddNameToBracket < ActiveRecord::Migration[5.2]
  def change
    add_column :brackets, :name, :string, null: false
    add_column :brackets, :points, :integer, default: 0
  end
end
