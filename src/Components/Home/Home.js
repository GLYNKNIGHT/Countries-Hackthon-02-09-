import List from "../List/list"
import SearchBar from '../Search Bar/searchBar';
import {useState, useEffect} from 'react'


export default function Home(){

    const [searchState, setSearchState] = useState('')
    const [regionState, setRegionState] = useState('All')
    const [countries, setCountries] = useState([])
    const [displayData, setDisplayData]= useState([])

    useEffect(() => {

        const fetchCountryData = async() => {
            const response = await fetch("https://restcountries.com/v3.1/all")
            const fetchCountries = await response.json()
            setCountries(fetchCountries)
            setDisplayData(fetchCountries)
                        console.log(fetchCountries)
        }
        fetchCountryData()  
    
    }, [])
    
    function onInput(e){
      setSearchState(e.target.value)
      console.log(searchState)
      
    }
    
    function onSelect(e){
      setRegionState(e.target.value)
      e.preventDefault()
      console.log(regionState)
        let regionData = []
      for (let i = 0; i<countries.length;i++){
          if(regionState === countries[i].region){
              regionData.push(countries[i])
              
          }
          
      }
      setDisplayData(regionData)
      console.log(displayData)
    }
    
    
    
     
    
    
    

return<div className="App">
  <header className="App-header">
   <h3>Where in the world?</h3>
   
  </header>
  <div className="content-display">
  <SearchBar onInput={onInput} onSelect={onSelect} />
  <List countries={displayData} name={searchState} region={regionState}/>
  </div>
</div>



}
    