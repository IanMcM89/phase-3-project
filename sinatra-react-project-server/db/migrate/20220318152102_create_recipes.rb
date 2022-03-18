class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :image_url
      t.string :created_by
      t.integer :category_id
      t.text :description
      t.text :ingredients, array: true, default: []
      t.text :steps, array: true, default: []
      t.timestamps
    end
  end
end
