class Reservation < ApplicationRecord
  belongs_to :room
  belongs_to :user
  has_many :metadata_reservations
  has_many :metadata, through: :metadata_reservations
end
