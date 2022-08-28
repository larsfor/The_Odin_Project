Rails.application.routes.draw do
  resources :comments
  resources :friend_requests do
    member do
      get 'send_request'
      get 'accept_request'
      get 'decline_request'
    end
  end
  resources :profiles
  resources :posts do
    resources :comments
  end
  resources :likes do
    member do
      get 'like_post'
      get 'dislike_post'
    end
  end

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  devise_scope :user do
    delete 'sign_out', :to => 'devise/sessions#destroy', :as => :facebook_destroy_user_session
  end
  
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  root "posts#index"
end
