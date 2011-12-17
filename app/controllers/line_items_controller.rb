class LineItemsController < ApplicationController
  before_filter :authorize
  respond_to :html, :json

  def index
    if (params[:account])
      @line_items = Account.find(params[:account]).line_items
    else
      @line_items = LineItem.all
    end
    respond_with(@line_items)
  end

  def show
    @line_item = LineItem.find(params[:id])
  end

  def create
    respond_with(LineItem.create(params[:line_item]))
  end

  def update
    line_item = LineItem.find(params[:id])
    line_item.update_attributes(params[:line_item])
    respond_with(line_item)
  end
end
