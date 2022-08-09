Rails.application.routes.draw do
  resources :hangouts
  resources :messages, only: [:create]
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'hangouts#index'
end
