import React, { useEffect, useContext, useState } from "react";
import { selectedContext } from "../../App";
import './Recipe.module.scss';
import Icons from '../../asstets/img/icons.svg';
import {ApiBase, API_KEY} from '../../services/ResipeService'
import Error from "../Messages/Error";

export const Recipe = () => {

  const {
    selected,
    setSelected,
    bookMarked,
    setBookMarked
  } = useContext(selectedContext);

  const [recipe, setRecipe] = useState();
  const [serving, setServing] = useState('');
  const id = window.location.hash.slice(1);

  useEffect(() => {
    if (!selected) setSelected(id);
  }, [selected, setSelected, id]);

  useEffect(() => {
    if(!selected) return
    document.location.href = `/#${selected}`;
    fetch(`${ApiBase}/${selected}?${API_KEY}`)
    .then((res) =>
    res
      .json()
      .then((re) => {
        if (re.status === "fail") throw new Error(`Error`);
       console.log(re)
        setRecipe(re.data.recipe);
        console.log(recipe.ingredients)
        setServing(re.data.recipe.servings);
      })
  );
}, [selected]);

    return (
        <div className="recipe">
    

 

    <figure className="recipe__fig">
      <img src={recipe.image_url}alt="Tomato" className="recipe__img" />
      <h1 className="recipe__title">
        <span>{recipe.title}</span>
      </h1>
    </figure>

    <div className="recipe__details">
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href={`${Icons}#icon-clock`}></use>
        </svg>
        <span className="recipe__info-data recipe__info-data--minutes">{recipe.cooking_time}</span>
        <span className="recipe__info-text">minutes</span>
      </div>
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href={`${Icons}#icon-users`}></use>
        </svg>
        <span className="recipe__info-data recipe__info-data--people">{serving}</span>
        <span className="recipe__info-text">servings</span>

        <div className="recipe__info-buttons">
          <button 
          onClick={() => setServing(serving - 1)}
          className="btn--tiny btn--increase-servings">
            <svg>
              <use href={`${Icons}#icon-minus-circle`}></use>
            </svg>
          </button>
          <button 
          onClick={() => setServing(serving + 1)}
          className="btn--tiny btn--increase-servings">
            <svg>
              <use href={`${Icons}#icon-plus-circle`}></use>
            </svg>
          </button>
        </div>
      </div>

      <div className="recipe__user-generated">
        <svg>
          <use href={`${Icons}#icon-user`}></use>
        </svg>
      </div>
      <button className="btn--round">
        <svg className="">
          <use href={`${Icons}#icon-bookmark-fill`}></use>
        </svg>
      </button>
    </div>

    <div className="recipe__ingredients">
      <h2 className="heading--2">Recipe ingredients</h2>
      <ul className="recipe__ingredient-list">
      {recipe.ingredients.map((ing, i) => {
        return (
          <li className="recipe__ingredient" key={i}>
          <svg className="recipe__icon">
            <use href={`${Icons}#icon-check`}></use>
          </svg>
          <div className="recipe__quantity">{
            ing.quantity ? (ing.quantity * serving) / recipe.servings : ''}</div>
          <div className="recipe__description">
            <span className="recipe__unit">{ing.unit}</span>
            {ing.description}
          </div>
        </li>
          )
        })}
      
      </ul>
    </div>

    <div className="recipe__directions">
      <h2 className="heading--2">How to cook it</h2>
      <p className="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span className="recipe__publisher"> {recipe.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        className="btn--small recipe__btn"
        href={recipe.source_url}
        target="_blank"
        rel="noreferrer"
        
      >
        <span>Directions</span>
        <svg className="search__icon">
          <use href={`${Icons}#icon-arrow-right`}></use>
        </svg>
      </a>
    </div>
    
  </div>
    )
}
