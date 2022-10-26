import React, { createContext, useEffect, useState } from "react";
import { Component } from "react";
import {Header} from "./components/Header/Header";
import {SearchResults} from "./components/SearchResults/SearchResults";
import Recipe from "./components/Recipe/Recipe";
import Upload from "./components/Upload/Upload";
import Preview from "./components/Preview/Preview";
import RES_PER_PAGE from "./services/ResipeService";
import _apiBase from './services/ResipeService';
import apiKey from './services/ResipeService';

export const selectedContext = createContext()

export const App = () => {
  const [results, setResults] = useState();
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState();
  const [spinner, setSpinner] = useState({
    search: false,
    recipe: false,
    modal: false
  });

  const value = {
    results,
    setResults,
    page,
    setPage,
    selected,
    setSelected,
    spinner,
    setSpinner
  }



    return (
      <selectedContext.Provider value={value}>
      <div className="container">
        <Header/>
        <SearchResults res={results}/>
        <Recipe/>
        <Upload/>
      </div>
      </selectedContext.Provider>
    )
  
  
}


