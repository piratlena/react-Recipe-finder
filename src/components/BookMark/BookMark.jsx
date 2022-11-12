import React from "react";
import { useContext } from "react";
import { selectedContext } from "../../App";
import { Preview } from "../Preview/Preview";
import Icons from '../../asstets/img/icons.svg';

export const Bookmark = () => {
    const {bookMarked} = useContext(selectedContext)

    return (
        <>
             <li className="nav__item">
          <button className="nav__btn nav__btn--bookmarks">
            <svg className="nav__icon">
            <use href={`${Icons}#icon-bookmark`}></use>
            </svg>
            <span>Bookmarks</span>
          </button>
          <div className="bookmarks">
            <ul className="bookmarks__list">
                {bookMarked.map((mark, i) => {
                    return <Preview key={i} data={mark.recipe}/>
                })}
              <div className="message">
                <div>
                  <svg>
                    <use href={`${Icons}#icon-smile`}></use>
                  </svg>
                </div>
                <p>
                  {
                    !bookMarked.length
                    ? 'No bookmarks yet. Find a nice recipe and bookmark it✔'
                    : 'Enjoy😊'
                  }
                </p>
              </div>

               {/* <li className="preview">
                <a className="preview__link" href="#23456">
                  <figure className="preview__fig">
                    <img src="src/img/test-1.jpg" alt="Test" />
                  </figure>
                  <div className="preview__data">
                    <h4 className="preview__name">
                      Pasta with Tomato Cream ...
                    </h4>
                    <p className="preview__author">The Pioneer Woman</p>
                  </div>
                </a>
              </li>  */}
            </ul>
          </div>
        </li>
        </>
    )
}