class ReservationsController < ApplicationController
  def index
    render json: ReservationsHelper.list_view(Reservation.all)
  end

  def show
    render json: ReservationsHelper.complete_view(Reservation.find(params[:id]))
  end

  def calendar
    render json: ReservationsHelper.calendar_view(Reservation.all)
  end
end
