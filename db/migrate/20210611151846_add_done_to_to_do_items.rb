class AddDoneToToDoItems < ActiveRecord::Migration[6.0]
  def change
    add_column :to_do_items, :done, :boolean, default: false, null: false
  end
end
