class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :image_url
      t.integer :category_id
      t.boolean :is_favorited
      t.string :prep_time
      t.string :cook_time
      t.text :description
      t.text :ingredients, array: true, default: "[]"
      t.text :steps, array: true, default: "[]"
      t.timestamps
    end
  end
end
