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
    Recipe.all.to_json(only: [
      :id, 
      :title, 
      :image_url, 
      :category_id, 
      :is_favorited, 
      :cook_time, 
      :prep_time, 
      :description, 
      :ingredients, 
      :steps
    ])
  end

  get '/recipes/:id' do
    Recipe.find(params[:id]).to_json(only: [
      :id, 
      :title, 
      :image_url, 
      :category_id, 
      :is_favorited, 
      :cook_time, 
      :prep_time, 
      :description, 
      :ingredients, 
      :steps
    ])
  end

  post '/recipes' do
    recipe = Recipe.create(
      title: params[:title],
      image_url: params[:image_url],
      category_id: params[:category_id],
      is_favorited: params[:is_favorited],
      cook_time: params[:cook_time],
      prep_time: params[:prep_time],
      description: params[:description],
      ingredients: params[:ingredients],
      steps: params[:steps]
    )
    recipe.to_json(only: [
      :id, 
      :title, 
      :image_url, 
      :category_id, 
      :is_favorited, 
      :cook_time, 
      :prep_time, 
      :description, 
      :ingredients, 
      :steps
    ])
  end

  patch '/recipes/:id' do
    recipe = Recipe.find(params[:id])
    recipe.update(
      is_favorited: params[:is_favorited],
    )
    recipe.to_json(only: [
      :id, 
      :title, 
      :image_url, 
      :category_id, 
      :is_favorited, 
      :cook_time, 
      :prep_time, 
      :description, 
      :ingredients, 
      :steps
    ])
  end

  delete "/recipes/:id" do
    recipe = Recipe.find(params[:id])
    recipe.destroy
    recipe.to_json(only: [
      :id, 
      :title, 
      :image_url, 
      :category_id, 
      :is_favorited, 
      :cook_time, 
      :prep_time, 
      :description, 
      :ingredients, 
      :steps
    ])
  end
end
