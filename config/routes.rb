Rails.application.routes.draw do
  devise_for :users
  root 'home#index'

  get '/search', to: 'search#index'

  resources :apps, only: :show
end
