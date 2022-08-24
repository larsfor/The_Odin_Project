class FriendRequestsController < ApplicationController
  def index
  end
  
  def show
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

  def accept_request
    friend = User.find(params[:id])

    if friend.friends << current_user
      current_user.friends << friend
      friend_request = FriendRequest.where(user_id: current_user.id, friend_id: friend)
      redirect_to root_path, notice: "You and #{friend.name} are now friends"
    else
      render :index, status: :unprocessable_entity
    end
  end

  def decline_request
    friend = User.find(params[:id])

    friend_request = FriendRequest.where(user_id: friend.id, friend_id: current_user.id)
    friend_request.last.delete
    redirect_to root_path, notice: "You declined #{friend.name}'s friend request"
  end

end
