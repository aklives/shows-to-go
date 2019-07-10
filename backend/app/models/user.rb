class User < ApplicationRecord
  has_many :tickets
  has_many :concerts, through: :tickets


  validates_uniqueness_of :email
  has_secure_password
end
