import React from "react";
import '../../styles/_base.scss';
import Icons from '../../asstets/img/icons.svg'

export const Start = () => {
    return (
      <div className="message">
        <div>
        <svg>
          <use href={`${Icons}#icon-smile`}></use>
        </svg>
      </div>
      <p>Start by searching for a recipe or an ingredient. Have fun!</p>
    </div>
       
    )
}
