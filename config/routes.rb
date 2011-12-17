AliceApp::Application.routes.draw do
  resources :claims

  resources :line_items

  resources :accounts

  resources :tasks do
    resources :attachments, :only => [:create, :show]
  end

  resources :groups
  resources :users

  root :to => 'high_voltage/pages#show', :id => 'home'

  if ["development", "test"].include? Rails.env
    mount Jasminerice::Engine => "/jasmine"
  end
end
