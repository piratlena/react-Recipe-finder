import React from "react";
import '../../styles/_base.scss';
import Icons from '../../asstets/img/icons.svg'
export const Spinner = () => {
    return (
        <div className="spinner">
        <svg>
          <use href={`${Icons}#icon-loader`}></use>
        </svg>
      </div> 
    )
};
