import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/RecipeForm.css";

function RecipeForm({ resetRecipes }) {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showImageURL, setShowImageURL] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    image_url: '',
    category_id: 1,
    is_favorited: false,
    prep_time: '',
    cook_time: '',
    description: '',
    ingredients: ['', '', '', '', '', ''],
    steps: ['', '', '']
  });

  const history = useHistory();

  //Add new li to directions/ingredients ul:
  const addLi = Key => {
    formData[Key].push('');
    setFormData({ ...formData, [Key]: formData[Key] });
  }

  //Delete li from directions/ingredients ul:
  const deleteLi = (key, index) => {
    const array = formData[key].filter((e, i) => i !== index);
    setFormData({ ...formData, [key]: array });
  }

  //Render newly added li to DOM:
  const displayLi = (key, value) => formData[key].map((item, index) => {
    return (
      <li key={index}>
        <textarea
          name={key}
          placeholder={`Enter ${value}...`}
          maxLength="230"
          value={item}
          onChange={(e) => handleLiChange(e, index)}
        />
        <button type="button" onClick={() => deleteLi(key, index)}>-</button>
      </li>
    )
  });

  //Control text inputs:
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  //Control li textArea inputs:
  const handleLiChange = (e, index) => {
    const array = formData[e.target.name].slice();
    array[index] = e.target.value;
    setFormData({ ...formData, [e.target.name]: array });
  }

  //Sumbut recipe and redirect to recipe page:
  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(formData).includes('')) {
      setFormError('All input fields must be filled before posting');
    } else if (formData.steps.includes('')) {
      setFormError('Step fields cannot be left blank');
    } else if (formData.ingredients.includes('')) {
      setFormError('Ingredient fields cannot be left blank');
    } else {
      postRecipe();
    }
  }

  //Send POST request to '/recipes':
  const postRecipe = () => {
    fetch('http://localhost:9292/recipes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(r => r.json())
      .then(resetRecipes())
      .then(getNewRecipe())
  }

  //Route to newly created recipe page after POST:
  const getNewRecipe = () => {
    fetch("http://localhost:9292/recipes")
    .then(r => r.json())
    .then(recipeData => {
      history.push(`/recipes/${recipeData.pop().id}`)
    })
  }

  return (
    <main>
      <form id="form" className="recipe" onSubmit={handleSubmit}>
        <div className="wrapper wrap--content-left">
          <div id="form__title-input">
            <img
              src="./images/icons/logo.png"
              alt="Leaf Icon"
            />
            <input
              type="text"
              name="title"
              placeholder="Recipe Title:"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div id="form__category-input">
            <select name="category_id" onChange={handleChange}>
              <option value={1}>Poultry</option>
              <option value={2}>Pork</option>
              <option value={3}>Beef, Lamb and Game</option>
              <option value={4}>Seafood</option>
              <option value={5}>Vegan Friendly</option>
              <option value={6}>Desserts and Sweets</option>
            </select>
          </div>
          <div id="form__description-input">
            <textarea
              name="description"
              placeholder="Recipe description..."
              maxLength="230"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="divider">
            <div className="divider div--transparent div--dot" />
          </div>
          <div className="wrapper wrap--ol">
            <div className="recipe__overlay overlay--directions" />
            <h3>Directions:</h3>
            <ol id="form__direction-inputs">
              {displayLi("steps", "step")}
              <button type="button" onClick={() => addLi("steps")}>+</button>
            </ol>
          </div>
        </div>
        <div className="wrapper wrap--content-right">
          <div className="wrapper wrap--ul">
            <button type="button" onMouseEnter={() => setShowIngredients(!showIngredients)}>Ingredients List</button>
            <div id="form__image-input" style={{ backgroundImage: `url(${formData.image_url})` }} alt=''>
              <div onMouseEnter={() => setShowImageURL(!showImageURL)} onMouseLeave={() => setShowImageURL(!showImageURL)}>
                <input className={showImageURL ? "image-url--show" : "image-url--hide"}
                  type="text"
                  name="image_url"
                  placeholder="Image URL:"
                  value={formData.image_url}
                  onChange={handleChange}
                />
                <img
                  id="camera-icon"
                  src="./images/icons/camera.png"
                  alt="Camera Icon"
                />
              </div>
              <button id="form__post-button">Submit</button>
            </div>
            <div className={showIngredients ? "ingredients--show" : "ingredients--hide"} onMouseLeave={() => setShowIngredients(!showIngredients)}>
              <div className="recipe__overlay overlay--ingredients" />
              <div className="recipe__times">
                <input
                  type="text"
                  name="prep_time"
                  placeholder="Prep Time: ex. 10 Min"
                  value={formData.prep_time}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cook_time"
                  placeholder="Cook Time: ex. 30 Min"
                  value={formData.cook_time}
                  onChange={handleChange}
                />
              </div>
              <ul id="form__ingredient-inputs">
                {displayLi("ingredients", "ingredient")}
                <button type="button" onClick={() => addLi("ingredients")}>+</button>
              </ul>
            </div>
          </div>
        </div>
      </form>
      <div id="form__error">
        <p>{formError}</p>
      </div>
      <div className="overlay overlay--down" />
    </main>
  );
}

export default RecipeForm;