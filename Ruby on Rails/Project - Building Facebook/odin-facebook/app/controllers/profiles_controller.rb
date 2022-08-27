class ProfilesController < ApplicationController
  def index
  end

  def show
    @user = User.find(params[:id])
    @posts = Post.where(user_id: @user)
  end
end
