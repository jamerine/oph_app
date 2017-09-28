Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api do
    namespace :v1 do
      resources :products
      resources :order_items
      resources :orders
    end
  end

end
