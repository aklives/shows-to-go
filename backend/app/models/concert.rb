class Concert < ApplicationRecord

  belongs_to :day
  belongs_to :venue
  has_many :tickets, dependent: :destroy

  has_many :users, through: :tickets


end
