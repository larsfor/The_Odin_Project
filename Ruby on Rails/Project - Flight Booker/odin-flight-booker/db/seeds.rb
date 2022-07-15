# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Airport.create(airport_code: "SFO")
Airport.create(airport_code: "NYC")
Airport.create(airport_code: "CLE")
Airport.create(airport_code: "DSM")
Airport.create(airport_code: "FNT")

Flight.create(departure_airport_id: 1, 
              arrival_airport_id: 2, 
              start: '2022-07-15 19:24:01.32674 +0200', 
              flight_duration: 1.5)
Flight.create(departure_airport_id: 3, 
              arrival_airport_id: 4, 
              start: '2022-07-15 20:24:01.32674 +0200', 
              flight_duration: 2.5)
Flight.create(departure_airport_id: 5, 
              arrival_airport_id: 1, 
              start: '2022-07-15 21:24:01.32674 +0200', 
              flight_duration: 0.5)
Flight.create(departure_airport_id: 1, 
              arrival_airport_id: 3, 
              start: '2022-07-15 22:24:01.32674 +0200', 
              flight_duration: 3.0)
Flight.create(departure_airport_id: 2, 
              arrival_airport_id: 4, 
              start: '2022-07-15 23:24:01.32674 +0200', 
              flight_duration: 2.0)
Flight.create(departure_airport_id: 5, 
              arrival_airport_id: 2, 
              start: '2022-07-16 00:24:01.32674 +0200', 
              flight_duration: 1.0)