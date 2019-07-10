class VenuesController < ApplicationController

  def index
    @venues = Venue.all
    render json: @venues
  end

  def show
    @venue = Venue.find(params[:id])
    render json: @venue
  end

  def create
    @venue = Venue.create(venue_params)
    render json: @venue
  end

  def update
    @venue = Venue.find(params[:id])
    @venue.update(venue_params)
    render json: @venue
  end

  def destroy
    @venue = Venue.find(params[:id])
    @venue.destroy
    render json: @venue
  end

  private

  def venue_params
    params.require(:venue).permit(:name, :address, :lat, :lng)
  end


end
