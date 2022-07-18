class Flight < ApplicationRecord
    has_many :bookings
    has_many :passengers, through: :bookings

    belongs_to :departure_airport, foreign_key: :departure_airport_id, class_name: "Airport"
    belongs_to :arrival_airport, foreign_key: :arrival_airport_id, class_name: "Airport"

    def flight_date_formatted
        start.strftime("%d/%m/%Y")
    end
end
