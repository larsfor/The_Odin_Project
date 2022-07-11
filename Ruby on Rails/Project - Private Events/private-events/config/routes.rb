Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  get '/events', to: "events#index"
  
  # Defines the root path route ("/")
  # root "articles#index"
  root "events#index"
end
