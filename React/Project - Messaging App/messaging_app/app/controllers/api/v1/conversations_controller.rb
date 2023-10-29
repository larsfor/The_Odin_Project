class Api::V1::ConversationsController < ApplicationController
  before_action :set_conversation, only: %i[show destroy]

  def index
    accepted_conversations = current_user.conversation_accepter_ids
    started_conversations = current_user.started_conversation_ids
    conversations = Conversation.find([accepted_conversations], [started_conversations])
    render json: conversations
  end

  def create
    conversation = Conversation.create!(conversation_params)
    if conversation
      render json: conversation
    else
      render json: conversation.errors
    end
  end

  def show
    render json: @conversation
  end

  def destroy
    @conversation&.destroy
    render json: { message: 'Conversation deleted!' }
  end

  private

  def conversation_params
    params.permit(:starter_id)
  end

  def set_conversation
    @conversation = Conversation.find(params[:id])
  end
end
