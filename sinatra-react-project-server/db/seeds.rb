puts "🌱 Seeding categories..."

Category.create(name: "Poultry")
Category.create(name: "Pork")
Category.create(name: "Beef, Lamb & Game")
Category.create(name: "Seafood")
Category.create(name: "Vegan Friendly")
Category.create(name: "Desserts and Sweets")

puts "🌱 Seeding recipes..."

# Poultry

Recipe.create(
    title: "Ground Chicken Tacos", 
    image_url: "http://localhost:3000/images/recipes/chicken-tacos.jpg",
    category_id: 1,
    is_favorited: false,
    prep_time: "10 Min",
    cook_time: "15 Min",
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
    title: "Chicken Sausage Pasta", 
    image_url: "http://localhost:3000/images/recipes/basil-sausage-pasta.jpg",
    category_id: 1,
    is_favorited: false,
    prep_time: "10 Min",
    cook_time: "20 Min",
    description: "A chicken based alternative to the classic meat sauce recipe.",
    ingredients: [
        "12-ounce Spaghetti Noodles", 
        "2 Links Chicken Apple Sausage (pre-cooked)", 
        "8 ounce can of tomato sauce",
        "1 Can Dices Tomatoes",
        "2 garlic cloves",
        "1/2 red onion",
        "Fresh chopped basil", 
        "Salt & pepper to taste", 
        "Parmesan cheese"
    ],
    steps: [
        "In large pot, add noodles and bring to a boil, then reduce heat to medium. Cook for about 10 minutes.",
        "While noodles are cooking, heat one tablespoon of olive oil on medium heat in a large skillet and then add the garlic and onion. Cook until the onion is translucent.",
        "Next add the tomato sauce, diced tomatoes, salt and pepper to taste and most of the basil, leaving some for garnish. Cook the sauce for ten minutes or until heated through.",
        "Chop the chicken sausage into medallions and add to the mixture, cooking for an additonal five minutes. ",
        "Drain the pasta in a collander, serve with the sauce and enjoy!"
    ],
)

# Pork

Recipe.create(
    title: "Hearty Pork Tenderloin", 
    image_url: "http://localhost:3000/images/recipes/pork-stew.jpg",
    category_id: 2,
    is_favorited: false,
    prep_time: "10 Min",
    cook_time: "4-6 Hours",
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
    title: "Tortilla Pizza", 
    image_url: "http://localhost:3000/images/recipes/tortilla-pizza.jpg",
    category_id: 2,
    is_favorited: false,
    prep_time: "10 Min",
    cook_time: "10 Min",
    description: "A thin crust pizza lover's dream come true!",
    ingredients: [
        "1 Burrito Size Tortilla",
        "8 ounce Jar Pizza Sauce",
        "Pepperoni",
        "Deli Scliced Ham",
        "Mozzarella Cheese",
        "Sliced Jalapeno Peppers",
        "Sliced Green Pepper",
        "Sliced Red Pepper",
        "Sliced Yellow Pepper",
        "Sliced Cherry Tomatoes",
        "Sliced Baby Bell Mushrooms",
        "Corn (optional)",
        "Sliced Olives (optional)",
        "Salt and Pepper (to taste)"
    ],
    steps: [
        "Preheat oven to 400 degrees Farenheit and prep veggies and ingredients.",
        "Spread pizza sauce evenly around open tortilla.",
        "Place pepperoni and ham evenly across tortilla.",
        "Sprinkle mozzarella cheese over the top of the sauce and meats.",
        "Add veggies evenly spaced across pizza top.",
        "Place tortilla pizza on a tray in the oven for approximately 10 min or until tortilla is crispy.",
        "Add salt and pepper to taste and enjoy!"
    ],
)

# Beef, Lamb and Game

Recipe.create(
    title: "Spaghetti with Meat Sauce", 
    image_url: "http://localhost:3000/images/recipes/spaghetti.jpg",
    category_id: 3,
    is_favorited: false,
    prep_time: "10 Min",
    cook_time: "20 Min",
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
    title: "Bison Burgers", 
    image_url: "http://localhost:3000/images/recipes/bison-burger.jpg",
    category_id: 3,
    is_favorited: false,
    prep_time: "30 Min",
    cook_time: "10 Min",
    description: "Savory bison burgers for that perfect summer-time backyard BBQ.",
    ingredients: [
        "1-2 lb Ground Bison",
        "Whole Wheat Buns",
        "Romaine Lettuce",
        "Sliced Tomato",
        "Sliced Red Onion",
        "Sliced Pepper Jack Cheese",
        "Sliced Pickles (optional)",
        "Favorite Condiments"
    ],
    steps: [
        "Marinade the bison burgers in worcestershire sauce for 30 min in the fridge. Sprinkle a little cajun seasoning on top (optional)",
        "Slice and chop all the veggies while the burgers are marinading.",
        "Grill bison burgers for roughly 6-10 minutes depending on taste, flipping halfway through.",
        "Two minutes before the burgers are done, place the buns in the BBQ to give them a toasted flavor.",
        "Serve burgers with grilled corn and enjoy!"
    ],
)

# Seafood

Recipe.create(
    title: "Shrimp Pasta in Spicy Garlic Sauce", 
    image_url: "http://localhost:3000/images/recipes/shrimp-pasta.jpg",
    category_id: 4,
    is_favorited: false,
    prep_time: "5 Min",
    cook_time: "15 Min",
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
    title: "Southern Conch Chowder", 
    image_url: "http://localhost:3000/images/recipes/conch.jpg",
    category_id: 4,
    is_favorited: false,
    prep_time: "10 Min",
    cook_time: "30 Min",
    description: "Savory conch in a creamy, buttery garlic chowder. A real Florida dish!",
    ingredients: [
        "1/2 lb of conch meat",
        "1 Medium Potato",
        "1/2 Cup Bell Pepper",
        "1/2 Cup Chopped Carrots",
        "1/4 Cup Chopped Cucumber",
        "2 Garlic Cloves",
        "1/2 Cup Chopped Red Onion",
        "1 Can Diced Tomatoes",
        "1/4 Cup Half & Half",
        "2 TBSP Lime Juice",
        "1 TBSP Olive Oil",
        "2 TBSP Butter",
        "1 Cup Chicken Broth",
        "1/4 TSP Garlic Powder",
        "1 TBSP Cajun Seasoning",
        "Crab Boil Seasoning (to taste)",
        "Salt & Pepper (to taste)",
        "Fresh Parsley (garnish)"
    ],
    steps: [
        "In large pot, add the conch meat and crab boil and boil on medium high for approximately 20-30 min",
        "While conch is cooking, heat olive oil and butter on medium-low heat in a large skillet, then add the garlic and onion and salt and pepper to taste. Cook until the onion is translucent.",
        "Add all the vegetables, seasonings, broth and diced tomatoes and cook for 30 min.",
        "Drain the conch in a collander, cut into cube sized chunks and add to skillet.",
        "Add the half & half to the mixture and stir to combine. Serve with fresh parsley."
    ],
)

# Vegan

Recipe.create(
    title: "Vegan Red Beans and Rice", 
    image_url: "http://localhost:3000/images/recipes/red-beans.jpg",
    category_id: 5,
    is_favorited: false,
    prep_time: "10 Min",
    cook_time: "2-4 Hours",
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
    title: "Spring Salad", 
    image_url: "http://localhost:3000/images/recipes/spring-salad.jpg",
    category_id: 5,
    is_favorited: false,
    prep_time: "5 Min",
    cook_time: "-",
    description: "A healthy spring salad that's quick and easy to make.",
    ingredients: [
        "Spring Mix",
        "Sliced Cucumber",
        "Sliced Red Onion",
        "Sliced Tomato",
        "Kalamata Olives (optional)",
        "Sliced Almonds (optional)",
        "Cracked Pepper (to taste)",
        "TBSP Olive Oil",
        "Vinaigrette Dressing"
    ],
    steps: [
        "Slice the veggies.",
        "Add all ingredients to a salad bowl and toss evenly.",
        "Enjoy!"
    ],
)

#Desserts and Sweets

Recipe.create(
    title: "Tropical Fruit Parfait", 
    image_url: "http://localhost:3000/images/recipes/fruit-parfairt.jpg",
    category_id: 6,
    is_favorited: false,
    prep_time: "10 Min",
    cook_time: "-",
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

Recipe.create(
    title: "Homemade Cheese Cake", 
    image_url: "http://localhost:3000/images/recipes/cheesecake.jpg",
    category_id: 6,
    is_favorited: false,
    prep_time: "20 Min",
    cook_time: "1.5 Hours",
    description: "",
    ingredients: [
        "1 Cup Graham Cracker Crumbs",
        "1 Cup Sugar",
        "1 TBSP Brown Sugar",
        "4 TBSP Butter",
        "32 oz Cream Cheese",
        "1 TSP Vanilla Extract",
        "2 Pinches Salt",
        "4 Eggs",
        "2/3 Cup Sour Cream",
        "2/3 Cup Heavy Cream"
    ],
    steps: [
        "Preheat oven to 350 degrees.",
        "For the crust, combine graham cracker crumbs, 4 TBSP butter, 2 TBSP sugar and a pinch of salt in a mixing bowl.",
        "Line a pie pan with the graham cracker crust, pressingly evenly for a solid crust.",
        "Bake the crust at 350 degrees for 10 min, then remove from oven to cool. Lower oven temperature to 325 degrees.",
        "Prepare cheesecake feeling by first smoothing cream cheese with a hand mixer.",
        "Next, add the remaining sugar, sour cream, salt, vanilla extract, and eggs and last the heavy cream and stir until creamy.",
        "Add filling to springform pan coated with heavy duty foil to prevent leakes. Place Springform pan into large baking pan.",
        "Pour hot water into the exterior baking pan so that it covers halway up the springform cheese cake pan.",
        "Place in oven and cook at 325 degrees for 1.5 hours.",
        "Remove from oven and allow cake to cool before slicing."
    ],
)

puts "✅ Done seeding!"
