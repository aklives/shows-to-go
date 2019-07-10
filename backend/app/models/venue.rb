class Venue < ApplicationRecord

  has_many :concerts
  has_many :days, through: :concerts

end
