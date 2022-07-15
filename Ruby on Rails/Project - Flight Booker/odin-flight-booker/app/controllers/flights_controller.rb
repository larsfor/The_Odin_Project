class FlightsController < ApplicationController
  def index
    @airports = Airport.all.map{ |f| [ f.airport_code, f.id ] }
    @dates = Flight.all.map{ |d| d.start }
    @flight = Flight.new
  end

  def new
    @flight = Flight.new(flight_params)

    if @flight.save
      redirect_to root_path
    else
        render :new, status: :unprocessable_entity
    end
  end

  private

  def flight_params
    params.require(:flight).permit(:departure_airport_id, :arrival_airport_id, :start, :flight_duration)
  end


end