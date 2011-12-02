class GroupsController < ApplicationController
  before_filter :authorize
  respond_to :html, :json

  def index
    respond_with(@groups = current_user.groups)
  end

  def show
    @group = current_user.groups.find(params[:id])
  end

  def create
    respond_with(current_user.groups.create(params[:group]))
  end

  def update
    group = current_user.groups.find(params[:id])
    group.update_attributes(params[:group])
    respond_with(group)
  end
end
