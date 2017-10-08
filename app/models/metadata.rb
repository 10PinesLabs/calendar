class Metadata < ApplicationRecord
  has_many :metadata_reservations
  has_many :reservation, through: :metadata_reservations
end
