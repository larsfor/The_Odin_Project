class Api::V1::CharactersController < ApplicationController
  before_action :set_character, only: %i[show]

  def index
    @characters = Character.all.order(created_at: :desc)

    respond_to do |format|
      format.html # index.html.erb
      format.xml { render :xml => @characters }
      format.json { render :json => @characters }
    end
  end

  def show
    render json: @character
  end

  private

  def set_character
    @character = Character.find(params[:id])
  end
end
