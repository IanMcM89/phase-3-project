class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/categories' do
    Category.all.to_json(only: [:id, :name])
  end

  get '/categories/:id' do
    Category.find(params[:id]).to_json(only: [:id, :name])
  end

  post '/categories' do
    category = Category.create(
      name: params[:name]
    )
    category.to_json(only: [:id, :name])
  end

  patch '/categories/:id' do
    category = Category.find(params[:id])
    category.update(
      name: params[:name],
    )
    category.to_json(only: [:id, :name])
  end

  delete "/categories/:id" do
    category = Category.find(params[:id])
    category.destroy
    category.to_json(only: [:id, :name])
  end

end
