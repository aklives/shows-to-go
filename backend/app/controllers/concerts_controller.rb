class ConcertsController < ApplicationController

  def index
    @concerts = Concert.all
    render json: @concerts
  end

  def show
    @concert = Concert.find(params[:id])
    render json: @concert
  end

  def create
    @concert = Concert.create(concert_params)
    render json: @concert
  end

  def update
    @concert = Concert.find(params[:id])
    @concert.update(concert_params)
    render json: @concert
  end

  def destroy
    @concert = Concert.find(params[:id])
    @concert.destroy
    render json: @concert
  end

  private

  def concert_params
    params.require(:concert).permit(:band, :day_id, :venue_id)
  end


end
