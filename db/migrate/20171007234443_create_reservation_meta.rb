class CreateReservationMeta < ActiveRecord::Migration[5.0]
  def change
    create_table :metadata do |t|
      t.string :description
      t.string :icon

      t.timestamps
    end
  end
end
