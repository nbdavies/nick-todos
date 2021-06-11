class ToDoItemsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    to_do_item = ToDoItem.create!(description: params[:description])
    render json: to_do_item
  end
  
  def index
    render json: ToDoItem.all
  end
  
  protected
  # 
  # def json_request?
  #   request.format.json?
  # end
end
