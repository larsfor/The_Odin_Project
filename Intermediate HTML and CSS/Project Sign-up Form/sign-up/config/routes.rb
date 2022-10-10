Rails.application.routes.draw do
  resources :projectforms
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root "projectforms#index"
end
