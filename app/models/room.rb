class Room < ApplicationRecord
  has_many :reservations

  def as_json(_options={})
    super(only: %i[id description])
  end
end
