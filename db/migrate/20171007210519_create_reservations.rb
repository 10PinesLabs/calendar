class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.string :description
      t.references :room, index: true, foreign_key: true
      t.datetime :from
      t.datetime :to
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
