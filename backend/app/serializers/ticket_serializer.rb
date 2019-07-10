class TicketSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :concert_id
  belongs_to :user
  belongs_to :concert

  def venue
    {venue_name: self.object.concert.venue.name}
  end

end
