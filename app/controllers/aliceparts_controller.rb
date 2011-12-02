class AlicepartsController < ApplicationController
  before_filter :authorize
  respond_to :html, :json

  def index
  end

end
