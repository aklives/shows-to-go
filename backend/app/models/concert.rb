class Concert < ApplicationRecord

  belongs_to :day
  belongs_to :venue
  has_many :tickets, dependent: :destroy

  has_many :users, through: :tickets

  validates_uniqueness_of :day_id, scope: [:venue_id, :band]


end
