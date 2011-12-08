class UsersController < ApplicationController
  before_filter :authorize
  respond_to :html, :json

  def index
    respond_with(@users = User.all)
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    respond_with(User.create(params[:user]))
  end

  def update
    user = User.find(params[:id])
    user.update_attributes(params[:user])
    respond_with(user)
  end
end
