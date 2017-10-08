class CreateMetadataReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :metadata_reservations do |t|
      t.references :metadata, foreign_key: true
      t.references :reservation, foreign_key: true

      t.timestamps
    end
  end
end
