ExampleApp::Application.routes.draw do
  resources :tasks do
    resources :attachments, :only => [:create, :show]
  end

  resources :groups

  resources :aliceparts, :only => [:index]

  root :to => 'aliceparts#index'

  if ["development", "test"].include? Rails.env
    mount Jasminerice::Engine => "/jasmine"
  end
end
