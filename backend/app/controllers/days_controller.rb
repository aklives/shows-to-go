class DaysController < ApplicationController

  def index
    @days = Day.all
    render json: @days
  end

  def show
    @day = Day.find(params[:id])
    render json: @day
  end

  def create
    @day = Day.create(day_params)
    render json: @day
  end

  def update
    @day = Day.find(params[:id])
    @day.update(day_params)
    render json: @day
  end

  def destroy
    @day = Day.find(params[:id])
    @day.destroy
    render json: @day
  end

  private

  def day_params
    params.require(:day).permit(:name)
  end


end
