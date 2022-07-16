class FlightsController < ApplicationController
  def index
    @airports = Airport.all.map { |f| [ f.airport_code, f.id ] }
    @dates = Flight.all.map{ |d| d.start }
    @flights = Flight.where(departure_airport_id: params[:departure_airport], arrival_airport_id: params[:arrival_airport], start: params[:flight_date])
  end
end