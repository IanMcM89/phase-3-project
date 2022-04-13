class RecipesController < Sinatra::Base
  set :default_content_type, 'application/json'

  RECIPE = [
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
  ]

  get '/recipes' do
    Recipe.all.to_json(only: RECIPE)
  end

  get '/recipes/:id' do
    Recipe.find(params[:id]).to_json(only: RECIPE)
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
    recipe.to_json(only: RECIPE)
  end

  patch '/recipes/:id' do
    recipe = Recipe.find(params[:id])
    recipe.update(
      is_favorited: params[:is_favorited],
    )
    recipe.to_json(only: RECIPE)
  end

  delete "/recipes/:id" do
    recipe = Recipe.find(params[:id])
    recipe.destroy
    recipe.to_json(only: RECIPE)
  end
end
