class MetadataReservation < ApplicationRecord
  belongs_to :metadata
  belongs_to :reservation
end
