Rails.application.routes.draw do
  resources :planned_adventure_comments, only: [:create, :index]
  resources :adventure_comments, only: [:create, :index]
  resources :planned_adventures, only: [:create, :index, :show]
  resources :adventures, only: [:create, :index, :show]
  # resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/location_data/:city/:country_code', to: 'locations#fetch_data'
  get '/location_data/:wiki_data_id', to: 'locations#fetch_wiki_data'
end
