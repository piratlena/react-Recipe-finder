import React, { useContext, useState, useEffect } from 'react';
import Logo from '../../asstets/img/logo.png';
import Icons from '../../asstets/img/icons.svg';
import { selectedContext } from '../../App';
import './Header.module.scss';
import {ApiBase, API_KEY} from '../../services/ResipeService'
import UpdateRecipe from '../SearchResults/SearchResults';


export const Header = () => {
  const {setPage, setResults, isLoading, setIsLoading} = useContext(selectedContext);
  const [search, setSearch] = useState('')
  const [searchValue, setSearchValue] = useState();
  
 useEffect(() => {
  if (!searchValue && searchValue !== '') return
  setIsLoading(true)
  fetch(`${ApiBase}?search=${searchValue}&${API_KEY}`)
  .then((res) => res.json())
    .then((obj) => {
      setResults(obj);
      setSearchValue(undefined);
      setIsLoading(false)
      if (obj.status === 'fail') throw new Error(`${obj.message}`)
    })
  setSearch('')
 }, [searchValue,setResults])
 
  return (
    <header className="header">
    <img src={Logo} alt="Logo" className="header__logo" />
    <form className="search">
      <input
        value={search}
        onChange={(e) => {setSearch(e.target.value)}}
        type="text"
        className="search__field"
        placeholder="Search over 1,000,000 recipes..."
      />
      <button 
      onClick = {(e) => {
        e.preventDefault()
        setSearchValue(search)
        setPage(1)
      }}
        className="btn search__btn">
        <svg className="search__icon">
          <use href={`${Icons}#icon-search`}></use>
        </svg>
        <span>Search</span>
      </button>
    </form>

    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <button className="nav__btn nav__btn--add-recipe">
            <svg className="nav__icon">
            <use href={`${Icons}#icon-edit`}></use>
            </svg>
            <span>Add recipe</span>
          </button>
        </li>
        <li className="nav__item">
          <button className="nav__btn nav__btn--bookmarks">
            <svg className="nav__icon">
            <use href={`${Icons}#icon-bookmark`}></use>
            </svg>
            <span>Bookmarks</span>
          </button>
          <div className="bookmarks">
            <ul className="bookmarks__list">
              <div className="message">
                <div>
                  <svg>
                    <use href={`${Icons}#icon-smile`}></use>
                  </svg>
                </div>
                <p>
                  No bookmarks yet. Find a nice recipe and bookmark it 
                </p>
              </div>

               <li className="preview">
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
              </li> 
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </header>
)
}