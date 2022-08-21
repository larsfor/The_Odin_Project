Rails.application.routes.draw do
  resources :friend_requests do
    member do
      get 'send_request'
    end
  end
  resources :profiles
  resources :posts
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "posts#index"
end
