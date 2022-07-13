class EventAttendingsController < ApplicationController

    def index
    end

    def attend
        @event = Event.find(params[:id])
        if @event.attendees.include?(current_user)
            redirect_to @event, notice: "You are already attending this event"
        else
            @event.attendees << current_user
            redirect_to @event, notice: "You are now attending this event"
        end
    end

    def cancel
        @event = Event.find(params[:id])
        @event.attendees.delete(current_user)
        redirect_to @event, notice: "You are no longer attending this event"
    end
end