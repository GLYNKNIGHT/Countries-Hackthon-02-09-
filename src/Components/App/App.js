
import React from "react";
import List from "../List/list"
import './App.css';
import SearchBar from '../Search Bar/searchBar';
import {useState} from 'react'




function App() {

 
const [searchState, setSearchState] = useState('')
const [regionState, setRegionState] = useState('')


function onInput(e){
  setSearchState(e.target.value)
  console.log(searchState)
}

function onSelect(e){
  setRegionState(e.target.value)
  console.log(regionState)
}



  return (
    <>
    <List />
    <div className="App">
      <header className="App-header">
       <h3>Where in the world?</h3>
       
      </header>
      <SearchBar onInput={onInput} onSelect={onSelect} />
    </div>
    </>
  );
}

export default App;
