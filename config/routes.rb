Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'welcome/home'
  root 'welcome#home'

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show]
    end
  end
end
