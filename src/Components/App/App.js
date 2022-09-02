import React from "react";
import './App.css';
import Home from "../Home/Home";
import CountryPage from "../Country/Country";
import { Routes, Route } from "react-router-dom";




function App() {

  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/country' element={<CountryPage/>}/>
   </Routes>
  );
}

export default App;
