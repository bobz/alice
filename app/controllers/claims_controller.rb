class ClaimsController < ApplicationController
  before_filter :authorize
  respond_to :html, :json

  def index
    if (params[:line_item])
      @claims = LineItem.find(params[:line_item]).claims
    else
      @claims = Claim.all
    end
    respond_with(@claims)
  end

  def show
    @claim = Claim.find(params[:id])
  end

  def create
    respond_with(Claim.create(params[:claim]))
  end

  def update
    claim = Claim.find(params[:id])
    claim.update_attributes(params[:claim])
    respond_with(claim)
  end
end
