Rails.application.routes.draw do
  get 'stimulus_exercises/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "stimulus_exercises#index"
end
