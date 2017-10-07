class AddInfoToUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :name
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :email, :string
    add_column :users, :avatar, :string
  end
end
