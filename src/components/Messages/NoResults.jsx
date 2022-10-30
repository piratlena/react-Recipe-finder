import React from "react";
import '../../styles/_base.scss';
import Icons from '../../asstets/img/icons.svg'
export const NoResults = () => {
    return (
        <div className="error">
        <div>
          <svg>
            <use href={`${Icons}#icon-alert-triangle`}></use>
          </svg>
        </div>
        <p>No recipes found for your query. Please try again!</p>
      </div> 
    )
};