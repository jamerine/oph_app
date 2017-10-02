Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  # Authentication
  post 'authenticate', to: 'authentication#authenticate'

  # Api definition
  namespace :api do
    namespace :v1 do
      resources :products
      resources :order_items
      resources :orders
      resources :users
    end
  end

end
