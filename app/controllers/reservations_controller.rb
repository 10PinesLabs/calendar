class ReservationsController < ApplicationController
  def index
    date = params[:date] ? params[:date] : Date.today
    page = params[:page] ? params[:page] : 1
    per_page = params[:per_page] ? params[:per_page] : 10

    reservations = Reservation.where('from_date > ?', date.prev_day)
                              .paginate(page: page, per_page: per_page)

    render json: ReservationsHelper.list_view(reservations)
  end

  def show
    render json: ReservationsHelper.complete_view(Reservation.find(params[:id]))
  end

  def calendar
    render json: ReservationsHelper.calendar_view(Reservation.all)
  end
end
