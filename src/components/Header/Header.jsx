import React, { useContext, useState, useEffect } from 'react';
import Logo from '../../asstets/img/logo.png';
import Icons from '../../asstets/img/icons.svg';
import { selectedContext } from '../../App';
import './Header.module.scss';
import {ApiBase, API_KEY} from '../../services/ResipeService';
import { Bookmark } from '../BookMark/BookMark';
import UpdateRecipe from '../SearchResults/SearchResults';


export const Header = () => {
  const {setPage, setResults, isLoading, setIsLoading, setOpenModal} = useContext(selectedContext);
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

      <div className="header__logo">
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="Cutlery"><path d="M221.5239,63.48a10,10,0,0,0-10,10v70.7241H133.3452V73.48a10,10,0,0,0-20,0v90.189a57.5269,57.5269,0,0,0,9.9987,32.473,59.1926,59.1926,0,0,0,39.0907,25.3777v45.6246a50.883,50.883,0,0,0-23.0977,11.3508,10.0019,10.0019,0,0,0-3.48,7.5825V422.5435a36.5777,36.5777,0,1,0,73.1553,0V286.0771a10.0019,10.0019,0,0,0-3.48-7.5825,50.8832,50.8832,0,0,0-23.0976-11.3508V221.5192a59.1922,59.1922,0,0,0,39.0906-25.3777,57.5262,57.5262,0,0,0,9.9987-32.473V73.48A10,10,0,0,0,221.5239,63.48Z"/><path d="M172.4346,138.0181a10,10,0,0,0,10-10V73.48a10,10,0,0,0-20,0v54.5386A10,10,0,0,0,172.4346,138.0181Z"/><path d="M398.6553,137.2036c0-46.4971-31.4951-84.3252-70.208-84.3252s-70.209,37.8281-70.209,84.3252c0,42.4181,26.2171,77.6057,60.209,83.4551v46.4852A50.8844,50.8844,0,0,0,295.35,278.4946a9.999,9.999,0,0,0-3.4805,7.5825V422.5435a36.5777,36.5777,0,1,0,73.1553,0V286.0771a9.999,9.999,0,0,0-3.4805-7.5825,50.874,50.874,0,0,0-23.0966-11.3509v-46.485C372.4388,214.8093,398.6553,179.6217,398.6553,137.2036Zm-71.208,65.8247a8.5,8.5,0,0,1,0-17c20.2412,0,36.708-22.8,36.708-50.8247a8.5,8.5,0,0,1,17,0C381.1553,172.6021,357.0615,203.0283,327.4473,203.0283Z"/></g></svg>
      </div>
      
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
          <button 
           className="nav__btn nav__btn--add-recipe"
           onClick={() => setOpenModal((prev) => {return !prev})}>
            <svg className="nav__icon">
            <use href={`${Icons}#icon-edit`}></use>
            </svg>
            <span>Add recipe</span>
          </button>
        </li>
      <Bookmark/>
      </ul>
    </nav>
  </header>
)
}