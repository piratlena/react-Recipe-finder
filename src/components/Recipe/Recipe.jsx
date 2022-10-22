import React from "react";
import './Recipe.module.scss';
import Icons from '../../asstets/img/icons.svg';
import Spinner from '../Messages/Spinner';
import Start from '../Messages/Start';
import Error from "../Messages/Error";

const Recipe = () => {
    return (
        <div className="recipe">
    

 

    <figure className="recipe__fig">
      <img src="https://s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg" alt="Tomato" className="recipe__img" />
      <h1 className="recipe__title">
        <span>Pasta with tomato cream sauce</span>
      </h1>
    </figure>

    <div className="recipe__details">
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href={`${Icons}#icon-clock`}></use>
        </svg>
        <span className="recipe__info-data recipe__info-data--minutes">45</span>
        <span className="recipe__info-text">minutes</span>
      </div>
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href={`${Icons}#icon-users`}></use>
        </svg>
        <span className="recipe__info-data recipe__info-data--people">4</span>
        <span className="recipe__info-text">servings</span>

        <div className="recipe__info-buttons">
          <button className="btn--tiny btn--increase-servings">
            <svg>
              <use href={`${Icons}#icon-minus-circle`}></use>
            </svg>
          </button>
          <button className="btn--tiny btn--increase-servings">
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
        <li className="recipe__ingredient">
          <svg className="recipe__icon">
            <use href={`${Icons}#icon-check`}></use>
          </svg>
          <div className="recipe__quantity">1000</div>
          <div className="recipe__description">
            <span className="recipe__unit">g</span>
            pasta
          </div>
        </li>

        <li className="recipe__ingredient">
          <svg className="recipe__icon">
            <use href={`${Icons}#icon-check`}></use>
          </svg>
          <div className="recipe__quantity">0.5</div>
          <div className="recipe__description">
            <span className="recipe__unit">cup</span>
            ricotta cheese
          </div>
        </li>
      </ul>
    </div>

    <div className="recipe__directions">
      <h2 className="heading--2">How to cook it</h2>
      <p className="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span className="recipe__publisher">The Pioneer Woman</span>. Please check out
        directions at their website.
      </p>
      <a
        className="btn--small recipe__btn"
        href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
        
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
export default Recipe;