class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show destroy]

  def index
    user = User.all
    render json: user
  end

  def create
    user = User.create!(user_params)
    if user
      render json: user
    else
      render json: user.errors
    end
  end

  def show
    render json: @user
  end

  def destroy
    @user&.destroy
    render json: { message: 'User deleted!' }
  end

  private

  def user_params
    params.permit(:email, :encrypted_password)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
