import React from "react";
import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";
import Recipe from "./components/Recipe/Recipe";
import Upload from "./components/Upload/Upload";

function App() {
  return (
    <div className="container">
      <Header/>
      <SearchResults/>
      <Recipe/>
      <Upload/>
    </div>
  );
}

export default App;
