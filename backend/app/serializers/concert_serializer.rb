class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :band, :venue_id, :day_id, :venue_name, :day_name
  belongs_to :venue
  belongs_to :day



  def venue_name
    {name: self.object.venue.name}
  end

  def day_name
    {name: self.object.day.name}
  end

end
