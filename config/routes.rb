Rails.application.routes.draw do
  root 'to_dos#index'
  resources :to_do_items
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
