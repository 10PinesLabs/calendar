module ReservationsHelper
  def self.calendar_view(reservations)
    reservations.to_json(
      only: %i[id description from to room_id]
    )
  end

  def self.list_view(reservations)
    reservations.to_json(
      only: %i[id description from to icon],
      include: {
        room: { only: %i[name id] },
        user: { only: %i[id avatar], methods: :full_name },
        metadata: { only: %i[description icon] }
      }
    )
  end

  def self.complete_view(reservations)
    reservations.to_json(
      only: %i[id description from to info icon],
      include: {
        room: { only: %i[name id] },
        user: { only: %i[id avatar], methods: :full_name },
        metadata: { only: %i[description icon] }
      }
    )
  end
end
