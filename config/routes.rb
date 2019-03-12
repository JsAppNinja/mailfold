Rails.application.routes.draw do
  devise_for :users
  root 'home#index'

  get '/search', to: 'search#index'

  resources :products do
    collection { post :import }    
  end

  resources :apps, only: :show
end
