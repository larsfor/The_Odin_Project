class Airport < ApplicationRecord
    has_many :departing_flights, foreign_key: :departure_airport, class_name: "Flight"
    has_many :arriviing_flights, foreign_key: :arrival_airport, class_name: "Flight"
end
