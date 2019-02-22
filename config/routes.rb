Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :teams, only: [:index]
      resources :users, only: [:index]
      resources :brackets, only: [:create]
    end
  end

  resources :users, only: [:index]

  get '*path', to: 'users#index'

end
