import React from "react";
import Icons from '../../asstets/img/icons.svg';
import './Preview.module.scss';
const Preview = () => {
return (
    <li className="preview">
        <a className="preview__link preview__link--active" href="#23456">
          <figure className="preview__fig">
            <img src="https://s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg" alt="Test" />
          </figure>
          <div className="preview__data">
            <h4 className="preview__title">Pasta with Tomato Cream ...</h4>
            <p className="preview__publisher">The Pioneer Woman</p>
            <div className="preview__user-generated">
              <svg>
                <use href={`${Icons}#icon-user`}></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
)
}
export default Preview;