class ToDoItemsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    to_do_item = ToDoItem.create!(description: params[:description])
    render json: to_do_item
  end
  
  def index
    render json: ToDoItem.all
  end
  
  def update
    to_do_item = ToDoItem.find(params[:id])
    update_params = params.permit(:done)
    to_do_item.update!(update_params)
    render json: to_do_item
  end
  
  protected
  # 
  # def json_request?
  #   request.format.json?
  # end
end
