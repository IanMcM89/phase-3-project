import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/RecipeForm.css";

function RecipeForm({ onSubmit }) {
  const [isHidden, setIsHidden] = useState(true);
  // const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    image_url: '',
    category_id: '',
    description: '',
    ingredients: ['','','','','','',''],
    steps: ['','','']
  });

  const history = useHistory();

  console.log(formData);

  //Add new li to directions/ingredients ul:
  const addLi = Key => {
    formData[Key].push('');
    setFormData({...formData, [Key]: formData[Key]});
  }

  //Delete li from directions/ingredients ul:
  const deleteLi = (key, index) => {
    const array = formData[key].filter((e, i) => i !== index);
    setFormData({ ...formData, [key]: array });
  }

  //Render newly added li to DOM tree:
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
        <button onClick={() => deleteLi(key, index)}>-</button>
      </li>
    )
  });

  //Control text inputs:
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  //Control text area li inputs:
  const handleLiChange = (e, index) => {
    const array = formData[e.target.name].slice();
    array[index] = e.target.value;
    setFormData({ ...formData, [e.target.name]: array });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (Object.values(formData).includes('')) {
    //   return setFormError('All input fields must be filled before posting');
    // } else {
    //   return postRecipe() & history.push("/recipes");
    // }
  }

  //Send post request to '/recipes':
  const postRecipe = () => {
    fetch('http://localhost:9292/recipes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(r => r.json())
      .then(newRecipe => onSubmit(newRecipe))
  }

  const handleClick = () => setIsHidden(!isHidden);

  return (
    <main>
      <form id="recipe-form" className="recipe" onSubmit={handleSubmit}>
        <div className="wrapper wrap--content-left">
          <div id="recipe-form__title-input">
            <img src="./images/icons/logo.png" alt="Leaf Icon"/>
            <input
              type="text"
              name="title"
              placeholder="Recipe Title:"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div id="recipe-form__category-input">
            <select name="category_id" onChange={handleChange}>
              <option value={1}>Poultry and Fowl</option>
              <option value={2}>Pork</option>
              <option value={3}>Beef, Lamb and Game</option>
              <option value={4}>Seafood</option>
              <option value={5}>Vegan Friendly</option>
              <option value={6}>Desserts and Sweets</option>
            </select>
          </div>
          <div id="recipe-form__description-input">
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
            <ol id="recipe-form__direction-inputs">
              {displayLi("steps", "step")}
              <button onClick={() => addLi("steps")}>+</button>
            </ol>
          </div>
        </div>
        <div className="wrapper wrap--content-right">
          <div className="wrapper wrap--ul">
            <button onClick={handleClick}>Ingredients List</button>
            <figure style={{backgroundImage: `url(${''})`}} alt=''>
              <img src="" alt=""/>
            </figure>
            <div className={isHidden ? "ingredients--hide" : "ingredients--show"}>
              <div className="recipe__overlay overlay--ingredients" />
              <ul id="recipe-form__ingredient-inputs">
                {displayLi("ingredients", "ingredient")}
                <button onClick={() => addLi("ingredients")}>+</button>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="form__error">
          <p>{formError}</p>
          <input type="submit" value="Post Recipe" />
        </div> */}
      </form>
      <div className="overlay overlay--down" />
    </main>
  );
}

export default RecipeForm;