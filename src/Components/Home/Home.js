import List from "../List/list"
import SearchBar from '../Search Bar/searchBar';
import {useState} from 'react'


export default function Home(){

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
    
    

return<div className="App">
  <header className="App-header">
   <h3>Where in the world?</h3>
   
  </header>
  <div className="content-display">
  <SearchBar onInput={onInput} onSelect={onSelect} />
  <List name={searchState} region={regionState}/>
  </div>
</div>



}
    