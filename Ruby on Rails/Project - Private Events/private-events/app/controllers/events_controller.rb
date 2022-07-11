class EventsController < ApplicationController
  before_action :authenticate_user!

  def index
    @events = Event.all.order("created_at DESC")
  end
end
