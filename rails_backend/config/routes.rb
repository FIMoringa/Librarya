Rails.application.routes.draw do
  resources :book_categories
  resources :authors
  resources :books
  resources :categories
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
