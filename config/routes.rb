Rails.application.routes.draw do

  # Authentication


  # Api definition
  namespace :api do
    namespace :v1 do
      resources :products
      resources :order_items
      resources :orders
      post 'login', to: "sessions#create"
    end
  end

end
