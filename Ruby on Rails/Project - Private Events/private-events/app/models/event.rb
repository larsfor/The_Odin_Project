class Event < ApplicationRecord
    has_many :event_attendings, foreign_key: :attended_event_id
    has_many :attendees, through: :event_attendings, source: :event_attendee
    belongs_to :creator, class_name: "User"

    #def self.past
    #    Event.where("date <= ?", Time.now)
    #end

    scope :past, -> {where("date <= ?", Time.now)}


    #def self.future
    #    Event.where("date >= ?", Time.now)
    #end

    scope :future, -> {where("date >= ?", Time.now)}
end
