class FriendRequestsController < ApplicationController
  def index
    @friend_requests = FriendRequest.where(friend_id: current_user.id)
  end

  def send_request
    @friend_id = params[:id]
    @friend_request = FriendRequest.new(user_id: current_user.id, friend_id: @friend_id)
    if @friend_request.save
      redirect_to root_path, notice: "You have now sent a friend request"
    else
      render :new, status: :unprocessable_entity
    end
  end
end
