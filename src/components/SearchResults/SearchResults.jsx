import React from 'react';
import './SearchResults.module.scss';
import Preview from '../Preview/Preview';
import Icons from '../../asstets/img/icons.svg'

const SearchResults = () => {
 return (
    <div className="search-results">
    <ul className="results">
      <Preview/>
    </ul>

    <div className="pagination">
    <button className="btn--inline pagination__btn--prev">
        <svg className="search__icon">
          <use href={`${Icons}#icon-arrow-left`}></use>
        </svg>
        <span>Page 1</span>
      </button>
      <button className="btn--inline pagination__btn--next">
        <span>Page 3</span>
        <svg className="search__icon">
          <use href={`${Icons}#icon-arrow-right`}></use>
        </svg>
      </button> 
    </div>

    <p className="copyright">
     Copyright by
        <a className="twitter-link" href="">Jonas Schmedtmann</a>
         Use for learning or your portfolio. Don't use to teach. Don't claim
      as your own.
    </p>
  </div>
 )
}
export default SearchResults;