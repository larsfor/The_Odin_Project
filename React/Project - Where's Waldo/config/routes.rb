Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'characters', to: 'characters#index'
      # get '/show/:id', to: 'characters#show'
      get 'characters/:id', to: 'characters#show'
    end
  end
  # get 'homepage/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "homepage#index"
end
