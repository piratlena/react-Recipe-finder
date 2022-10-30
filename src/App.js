import React, { createContext, useEffect, useState } from "react";
import {Header} from "./components/Header/Header";
import {SearchResults} from "./components/SearchResults/SearchResults";
import {Recipe} from "./components/Recipe/Recipe";
import Upload from "./components/Upload/Upload";


export const selectedContext = createContext()

export const App = () => {
  const [results, setResults] = useState();
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState();
  const [bookMarked, setBookMarked] = useState( localStorage.getItem("bookmarked")
  ? JSON.parse(localStorage.getItem("bookmarked"))
  : [])
  const [isLoading, setIsLoading] = React.useState(false);
  const [resultInfo, setResultInfo] = useState({
    search: false,
    recipe: false,
    modal: false
  });

  const beginSpinner = (view) => {
    setResultInfo((prev) => {
      return { ...prev, [view]: true };
    });
  };
  const stopSpinner = (view) => {
    setResultInfo((prev) => {
      return { ...prev, [view]: false };
    });
  };

  const value = {
    results,
    setResults,
    page,
    setPage,
    selected,
    setSelected,
    resultInfo,
    setResultInfo,
    isLoading,
    setIsLoading,
    bookMarked,
    setBookMarked,
    beginSpinner,
    stopSpinner
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


