Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :teams, only: [:index]
      resources :users, only: [:index] do
        resources :brackets, only: [:index, :show, :destroy]
      end
      resources :brackets, only: [:index, :create, :update]
    end
  end

  resources :users, only: [:show] do
    resources :brackets, only: [:new, :edit]
  end

  get '*path', to: 'users#show'

end
