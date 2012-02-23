class GroupsController < ApplicationController
  before_filter :authorize
  respond_to :html, :json

  def index
    if (params[:hidden])
      @groups = Group.all
    else
      @groups = Group.where(:hidden => false)
    end
    @users = User.all
    respond_with(@groups)
  end

  def show
    @group = Group.find(params[:id])
  end

  def create
    respond_with(Group.create(params[:group]))
  end

  def update
    group = current_user.groups.find(params[:id])
    group.update_attributes(params[:group])
    respond_with(group)
  end
end
