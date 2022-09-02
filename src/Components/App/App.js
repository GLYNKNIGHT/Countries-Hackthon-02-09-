import React from "react";
import './App.css';
import Home from "../Home/Home";
import CountryPage from "../Country/Country";
import { Routes, Route } from "react-router-dom";




function App() {


 
const [searchState, setSearchState] = useState('')
const [regionState, setRegionState] = useState('All')

function onInput(e){
  setSearchState(e.target.value)
  console.log(searchState)
}

function onSelect(e){
  setRegionState(e.target.value)
  e.preventDefault()
  console.log(regionState)
}



  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/country' element={<CountryPage/>}/>
   </Routes>
    <div className="App">
      <header className="App-header">
       <h3>Where in the world?</h3>
       
      </header>
      <div className="content-display">
      <SearchBar onInput={onInput} onSelect={onSelect} />
      <List name={searchState} region={regionState}/>
      </div>
    </div>
    </>

  );
}

export default App;
