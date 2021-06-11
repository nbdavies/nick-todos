class ToDoItemsController < ApplicationController
  def create
    to_do_item = ToDoItem.create!(description: params[:description])
    render json: to_do_item
  end
end
