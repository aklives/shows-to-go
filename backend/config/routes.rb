Rails.application.routes.draw do
  resources :days
  resources :venues
  resources :concerts
  resources :tickets
  resources :users

  post "/login", to: "auth#login"

	get "/auto_login", to: "auth#auto_login"

end
