Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'student/index' => 'students#index'
  get 'team/index' => 'teams#index'
  root 'students#index'
end
