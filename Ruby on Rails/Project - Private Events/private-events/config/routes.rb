Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: "registrations" }
  resources :events
  resources :users
  resources :event_attendings do
    member do
      get 'attend'
      get 'cancel'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "events#index"
end
