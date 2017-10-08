class RenameFromInReservation < ActiveRecord::Migration[5.0]
  def change
    rename_column :reservations, :from, :from_date
    rename_column :reservations, :to, :to_date
  end
end
