class EventsController < ApplicationController
  before_action :authenticate_user!

  def index
    @event = Event.all.order("created_at DESC")
  end
end
