class Reservation < ApplicationRecord
  belongs_to :room
  belongs_to :user
  has_many :metadata_reservations
  has_many :metadata, through: :metadata_reservations

  def as_json(options = {})
    super((options || {}).merge(
      only: %i[id description from to icon info],
      include: {
        room: { only: %i[name id] },
        user: { only: %i[id avatar], methods: :full_name },
        metadata: { only: %i[description icon] }
      }
    ))
  end
end
