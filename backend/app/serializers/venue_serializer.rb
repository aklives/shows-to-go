class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :lat, :lng
  has_many :concerts





end
