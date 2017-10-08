class Reservation < ApplicationRecord
  belongs_to :room
  belongs_to :user
  has_many :metadata_reservations
  has_many :metadata, through: :metadata_reservations

  def as_json(_options = {})
    super(include: {
      room: { only: %i[name id] },
      user: { only: %i[first_name last_name id] },
      metadata: { only: %i[description icon] }
    }
    )
  end
end

# only: %i[
#       id
#       description
#       from
#       to
#       icon
#     ],
