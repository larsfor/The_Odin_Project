Rails.application.routes.draw do
  devise_for :users
  get 'posts/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :posts, only: [:new, :create, :index]

  # Defines the root path route ("/")
  # root "articles#index"
  root "posts#index"
end
