Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/index'
      post 'users/create'
      get 'users/show/:id', to: 'users#show'
      delete 'users/destroy/:id', to: 'users#destroy'

      get 'conversations/index'
      post 'conversations/create'
      get 'conversations/show/:id', to: 'conversations#show'
      delete 'conversations/destroy/:id', to: 'conversations#destroy'

      get 'messages/index'
      post 'messages/create'
      get 'messages/show/:id', to: 'messages#show'
      get 'messages/conversation/:id', to: 'messages#conversation'
      delete 'messages/destroy', to: 'messages#destroy'
    end
  end
  devise_for :users
  get '/*path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/404', to: "errors#not_found", via: :all
  get '/500', to: "errors#internal_server_error", via: :all

  # Defines the root path route ("/")
  root "homepage#index"
end
