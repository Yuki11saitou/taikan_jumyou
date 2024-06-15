Rails.application.routes.draw do
  root 'static_pages#top'
  get 'top', to: 'static_pages#top'
  post 'result', to: 'results#result'
  get 'result', to: 'results#result'
  get 'underly_rule', to: 'underly_rule#underly_rule'
  get 'progress_rate', to: 'progress_rate#progress_rate'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end