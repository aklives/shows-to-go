class TicketsController < ApplicationController

  def index
    @tickets = Ticket.all
    render json: @tickets
  end

  def show
    @ticket = Ticket.find(params[:id])
    render json: @ticket
  end

  def create
    @ticket = Ticket.create(ticket_params)
    render json: @ticket
  end

  def update
    @ticket = Ticket.find(params[:id])
    @ticket.update(ticket_params)
    render json: @ticket
  end

  def destroy
    @ticket = Ticket.find(params[:id])
    @ticket.destroy
    render json: @ticket
  end

  private

  def ticket_params
    params.require(:ticket).permit(:concert_id, :user_id)
  end


end
