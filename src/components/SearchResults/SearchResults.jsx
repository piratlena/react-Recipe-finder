import React, { useContext, useState, useEffect} from 'react';
import { selectedContext } from '../../App';
import './SearchResults.module.scss';
import {Preview} from '../Preview/Preview';
import Icons from '../../asstets/img/icons.svg';



export const SearchResults =({res}) => {
  const { page, setPage } = useContext(selectedContext);
  const [newRes, setNewRes] = useState([]);
  let numPages;

  if (res) {
    numPages = Math.floor(1 + res.data.recipes.length / 10);
  }
  
  useEffect(() => {
    if(res) {
      const start = (page - 1) * 10;
      const end = page * 10;
      setNewRes(res.data.recipes.slice(start, end));
    }
  }, [res, page])

  return (
    <div className="search-results">
    <ul className="results">
    {newRes ? (
            newRes.map((rec, i) => <Preview key={i} data={rec} />)
          ) : (
            <></>
          )}
    </ul>

    <div className="pagination">
      {page !== 1 ? (<button 
      onClick={() => setPage((prev) => prev - 1)}
      className="btn--inline pagination__btn--prev">
        <svg className="search__icon">
          <use href={`${Icons}#icon-arrow-left`}></use>
        </svg>
        <span>{`Page ${page - 1}`}</span></button>) : ('')
      }
      
      {page !== numPages && numPages ? (<button 
      onClick={() => setPage((prev) => prev + 1)}
      className="btn--inline pagination__btn--next">
        <span>{`Page ${page + 1}`}</span>
        <svg className="search__icon">
          <use href={`${Icons}#icon-arrow-right`}></use>
        </svg>
      </button>) : ('')
      }
      
    
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
