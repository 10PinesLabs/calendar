class Reservation < ApplicationRecord
  belongs_to :room
  belongs_to :user

  def as_json(options={})
    super(:include => {
              :room => {:only => [:name, :id]},
              :user => {:only => [:first_name, :last_name, :id]}
          }
    )
  end
end
