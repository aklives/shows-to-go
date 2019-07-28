class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :admin 
  has_many :concerts
end
