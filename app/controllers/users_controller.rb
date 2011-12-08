class UsersController < ApplicationController
  before_filter :authorize
  respond_to :html, :json

  def index
    if (params[:group])
      @users = Group.find(params[:group]).users
    else
      @users = User.all
    end
    respond_with(@users)
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
