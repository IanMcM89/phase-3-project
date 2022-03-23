class Recipe < ActiveRecord::Base
    belongs_to :category
    serialize :ingredients
    serialize :steps
end