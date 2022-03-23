class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Category Routes
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

  # Recipe Routes

  get '/recipes' do
    Recipe.all.to_json(only: [:id, :title, :image_url, :created_by, :category_id, :description, :ingredients, :steps])
  end

  get '/recipes/:id' do
    Recipe.find(params[:id]).to_json(only: [:id, :title, :image_url, :created_by, :category_id, :description, :ingredients, :steps])
  end

end
