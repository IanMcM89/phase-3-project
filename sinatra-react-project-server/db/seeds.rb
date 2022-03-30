puts "🌱 Seeding categories..."

Category.create(name: "Poultry")
Category.create(name: "Pork")
Category.create(name: "Beef")
Category.create(name: "Seafood")
Category.create(name: "Vegan")
Category.create(name: "Dessert")

puts "🌱 Seeding recipes..."

Recipe.create(
    title: "Ground Chicken Tacos", 
    image_url: "./images/recipes/chicken-tacos.jpg",
    created_by: "IanMcM89",
    category_id: 1,
    description: "If you're short on time and feel like mexican than these quick and easy chicken tacos are the meal youve been looking for. Who doesn't like tacos?!",
    ingredients: [
        "1 lb Ground Chicken", 
        "1 Packet Taco Seasoning (pick your favorite brand)", 
        "1 Box Taco Shells (pick your favorite brand)",
        "1 TBSP Olive Oil",
        "2 Garlic Cloves",
        "1 Cup Chopped Tomato",
        "1 Cup Chopped Red Onion",
        "3-4 Cups Chopped Mixed Greens",
        "Shredded Mexican Cheese",
        "Salt & Pepper (to taste)"
    ],
    steps: [
        "Preheat oven to 350 Degrees.",
        "Heat olive oil over medium heat, then add ground chicken and garlic and cook until chicken is lightly browned, adding in taco seasoning and salt/pepper to taste",
        "While chicken is cooking, chop the tomato, onion and greens.",
        "Add taco shells to preheated oven for about 7-10 minutes",
        "Serve ground chicken in taco shells with preferred ingredients and enjoy!"
    ],
)

Recipe.create(
    title: "Hearty Pork Loin Stew", 
    image_url: "./images/recipes/pork-stew.jpg",
    created_by: "IanMcM89",
    category_id: 2,
    description: "This easy slow cooked pork tenderloin is a set-it-and-forget-it meal that's worth the wait!",
    ingredients: [
        "1 Pork Tenderloin", 
        "4 Cups Chicken Broth", 
        "2 Diced Russet Potatoes",
        "1 Cup Chopped Carrots",
        "1/2 Cup Chopped Celery",
        "4 Garlic Cloves",
        "1 Chopped Red Onion",
        "2 Bay Leaves", 
        "Salt & Pepper (to taste)", 
        "1 TSP Chili Powder",
        "1/2 TSP Garlic Powder",
        "1/4 TSP Cayenne",
        "1/4 TSP Smoked Paprika",
        "Green Onion (garnish)"
    ],
    steps: [
        "Combine all ingredients in a crock pot and set heat to high for 4 to 6 hours or until potatoes are soft and meat is cooked through, stirring occosaionally.",
        "Serve with green onion garnish."
    ],
)

Recipe.create(
    title: "Spaghetti and Meat Sauce", 
    image_url: "./images/recipes/spaghetti.jpg",
    created_by: "IanMcM89",
    category_id: 3,
    description: "Delicious spaghetti noodles in a zesty tomato and beef sauce. Bon Appetit!",
    ingredients: [
        "12-ounce Spaghetti Noodles", 
        "1 lb Ground Beef", 
        "24-ounce jar of tomato sauce", 
        "2 garlic cloves",
        "1/2 red onion",
        "Fresh chopped basil", 
        "Salt & pepper to taste", 
        "Parmesan cheese"
    ],
    steps: [
        "In large pot, add noodles and bring to a boil, then reduce heat to medium. Cook for about 10 minutes.",
        "While noodles are cooking, heat one tablespoon of olive oil on medium heat in a large skillet and then add the garlic and onion. Cook until the onion is translucent, then add the ground beef and cook until evenly browned.",
        "Next add the tomato sauce, salt and pepper to taste and most of the basil, leaving some for garnish. Cook the sauce for five minutes or until heated through.",
        "Drain the pasta in a collander, serve with the meat sauce and enjoy!"
    ],
)

Recipe.create(
    title: "Shrimp Pasta in Spicy Garlic Sauce", 
    image_url: "./images/recipes/shrimp-pasta.jpg",
    created_by: "IanMcM89",
    category_id: 4,
    description: "This quick and delicious shrimp pasta dish is super easy to make and great for when you're short on time.",
    ingredients: [
        "1 lb Bag of Cooked Baby Shrimp", 
        "2 TBSP Olive Oil",
        "2 TBSP Butter",
        "1/2 Cup Chicken Broth",
        "1/2 Box Linguini Pasta",
        "3 Garlic Cloves",
        "1/2 Cup Chopped Red Onion",
        "1/2 Cup Chopped Tomato",
        " 2 Cup Spinach",
        "1/2 TSP Crushed Red Pepper Flakes",
        "1/2 TSP Garlic Powder",
        "Fresh chopped basil",
        "Salt & Pepper (to taste)",
        "1 Cup Mixed Greens (per person for serving)",
        "Fresh Parsley (garnish)"
    ],
    steps: [
        "In large pot, add noodles and bring to a boil, then reduce heat to medium. Cook for about 10 minutes.",
        "While noodles are cooking, heat olive oil and butter on medium-low heat in a large skillet, then add the garlic and onion and salt and pepper to taste. Cook until the onion is translucent.",
        "Add the shrimp, vegetables, seasonings, broth and basil and cook for approximately 3-5 min.",
        "Drain the pasta in a collander, serve over a bed of mixed greens and add the shrimp and sauce over the noodles. Enjoy!"
    ],
)

Recipe.create(
    title: "Vegan Red Beans and Rice", 
    image_url: "./images/recipes/red-beans.jpg",
    created_by: "IanMcM89",
    category_id: 5,
    description: "You've got to try my meatless take on this southern, Cajun favorite!",
    ingredients: [
        "1 lb Bag of White Rice", 
        "1 TBSP Olive Oil",
        "1/2 Cup Vegetable Broth",
        "2 Cans Diced Tomato",
        "4 Garlic Cloves",
        "1 Chopped Green Bell Pepper",
        "1 TSP Crushed Red Pepper Flakes",
        "1 TSP Smoked Paprika",
        "1 TSP Dried Thyme",
        "1/2 Cup Chopped Celery",
        "1/2 TSP Garlic Powder",
        "1/4 TSP Cayenne Pepper",
        "2 Bay Leaves",
        "Salt & Pepper (to taste)",
        "Fresh Chopped Basil",
        "Fresh Scallions (garnish)"
    ],
    steps: [
        "Combine all ingredients except for rice and olive oil into a slow cooker and cook for 2 to 4 hours on high.",
        "Before beans are reasy, bring white rice, 4 cups of water and olive oil to boil in a medium saucepan. Once boiling, reduce heat to simmer and cook until rice is fluffy.",
        "Serve cooked red beans over a bed of white rice and enjoy!"
    ],
)

Recipe.create(
    title: "Tropical Fruit Parfait", 
    image_url: "./images/recipes/fruit-parfairt.jpg",
    created_by: "IanMcM89",
    category_id: 6,
    description: "This delicious tropical fruit parfeit will remind you of white sand and seabreezes and is a perfect way to end a meal.",
    ingredients: [
        "4 Cups Coconut Non-Fat Yogurt", 
        "1/2 Cup Pineapple",
        "1/2 Cup Mango",
        "1/2 Cup Kiwi",
        "Favorite Granola",
        "1/2 Cup Coconut Shavings",
        "Chocolate Syrup"
    ],
    steps: [
        "Chop fruit to preferred size.",
        "Combine ingredients in your favorite glass, drizzle with coconut and chocolate sauce and enjoy!"
    ],
)

Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/chicken-tacos.jpg", category_id: 1)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/pork-stew.jpg", category_id: 2)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/spaghetti.jpg", category_id: 3)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/shrimp-pasta.jpg", category_id: 4)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/red-beans.jpg", category_id: 5)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/fruit-parfairt.jpg", category_id: 6)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/chicken-tacos.jpg", category_id: 1)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/pork-stew.jpg", category_id: 2)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/spaghetti.jpg", category_id: 3)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/shrimp-pasta.jpg", category_id: 4)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/red-beans.jpg", category_id: 5)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/fruit-parfairt.jpg", category_id: 6)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/chicken-tacos.jpg", category_id: 1)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/pork-stew.jpg", category_id: 2)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/spaghetti.jpg", category_id: 3)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/shrimp-pasta.jpg", category_id: 4)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/red-beans.jpg", category_id: 5)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/fruit-parfairt.jpg", category_id: 6)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/chicken-tacos.jpg", category_id: 1)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/pork-stew.jpg", category_id: 2)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/spaghetti.jpg", category_id: 3)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/shrimp-pasta.jpg", category_id: 4)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/red-beans.jpg", category_id: 5)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/fruit-parfairt.jpg", category_id: 6)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/chicken-tacos.jpg", category_id: 1)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/pork-stew.jpg", category_id: 2)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/spaghetti.jpg", category_id: 3)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/shrimp-pasta.jpg", category_id: 4)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/red-beans.jpg", category_id: 5)
Recipe.create(title: "Recipe Placeholder", image_url: "./images/recipes/fruit-parfairt.jpg", category_id: 6)



puts "✅ Done seeding!"
