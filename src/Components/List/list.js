import React from "react";
import  { useState, useEffect} from "react";
import Card from "../Card/card";

import {Link} from "react-router-dom";


const List = ({ name, region }) => {
    const [countries, setCountries] = useState([])
    

    /*
    When user types into the search bar and submits, matching results should be returned.

    When user selects region, matching results should be returned.
    */


    useEffect(() => {

        const fetchCountryData = async() => {
            const response = await fetch("https://restcountries.com/v3.1/all")
            const fetchCountries = await response.json()
            setCountries(fetchCountries)
                        console.log(fetchCountries)
        }
        fetchCountryData()  
    }, [])


    /*
    useEffect(()=>{
        const fetchSearch = async() => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const fetchCountries = await response.json()
           setCountries(fetchCountries)
              console.log(fetchCountries)
        }
        
        fetchSearch()
    }, [name])
        */
       
        // const fetchRegion = async() => {
        //     const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
        //     const fetchCountries = await response.json()
        //     setCountries(fetchCountries)
        //     console.log(fetchCountries)
        // }
     /*   
    let filteredByRegion = []
        if(name === '') {
                for(let i = 0; i < countries.length; i++) {
                if(countries[i].region === region){
                    filteredByRegion.push(countries[i])
                }
            }
            setCountries(filteredByRegion)
            console.log('Filtered', filteredByRegion)
            console.log('Region', region)
        } else {
          
            for(let i = 0; i < countries.length; i++) {
                if(countries[i].region === region){
                    filteredByRegion.push(countries[i])
                }
            } 
            setCountries(filteredByRegion)
            console.log('Filtered', filteredByRegion)
            console.log('Region', region)
        }

*/
        
  
    return<div className="list">
        {countries.map((country) => <Link to={`/country/${country.name.common}`} state={{ from: {country} }} style={{ textDecoration: 'none', color: 'black'}}><Card
                        name={country.name.common} 
            flag={country.flags.png} 
            population={country.population} 
            capital={country.capital}
            region={country.region}></Card></Link>)}
    </div>
}

export default List




