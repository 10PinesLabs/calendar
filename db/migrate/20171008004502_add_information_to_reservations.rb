class AddInformationToReservations < ActiveRecord::Migration[5.0]
  def change
    add_column :reservations, :info, :text
  end
end
