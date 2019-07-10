class Ticket < ApplicationRecord

  belongs_to :concert
  belongs_to :user

  validates_uniqueness_of :concert_id, scope: :user_id
end
