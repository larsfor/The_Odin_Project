class Api::V1::MessagesController < ApplicationController
  before_action :set_message, only: %i[show destroy]

  def index
    message = Message.all
    render json: message
  end

  def create
    message = Message.create!(message_params)
    if user
      render json: message
    else
      render json: message.errors
    end
  end

  def show
    render json: @message
  end

  def destroy
    @message&.destroy
    render json: { message: 'Message deleted!' }
  end

  private

  def message_params
    params.permit(:body, :sender_id, :conversation_id)
  end

  def set_message
    @message = Message.find(params[:id])
  end
end
