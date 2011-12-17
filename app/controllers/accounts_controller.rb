class AccountsController < ApplicationController
  before_filter :authorize
  respond_to :html, :json

  def index
    @users = User.all
    @groups = Group.all
    respond_with (@accounts = Account.all)
  end

  def show
    @account = Account.find(params[:id])
  end

  def new
    @account = Account.new
  end

  def edit
    @account = Account.find(params[:id])
  end

  def create
    respond_with(@account = Account.new(params[:account]))
  end

  def update
    @account = Account.find(params[:id])

    @account.update_attributes(params[:account])
    respond_with(@account)
  end

  def destroy
    @account = Account.find(params[:id])
    @account.destroy
  end
end
