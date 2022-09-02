import React from "react";
import  { useState, useEffect} from "react";
import Card from "../Card/card";

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
        
        const fetchSearch = async() => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const fetchCountries = await response.json()
            setCountries(fetchCountries)
            console.log(fetchCountries)
        }
        
        // const fetchRegion = async() => {
        //     const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
        //     const fetchCountries = await response.json()
        //     setCountries(fetchCountries)
        //     console.log(fetchCountries)
        // }
        
        let filteredByRegion = []
        if(name === '') {
            fetchCountryData()
            for(let i = 0; i < countries.length; i++) {
                if(countries[i].region === region){
                    filteredByRegion.push(countries[i])
                }
            }
            setCountries(filteredByRegion)
            console.log('Filtered', filteredByRegion)
            console.log('Region', region)
        } else {
            fetchSearch()
            for(let i = 0; i < countries.length; i++) {
                if(countries[i].region === region){
                    filteredByRegion.push(countries[i])
                }
            } 
            setCountries(filteredByRegion)
            console.log('Filtered', filteredByRegion)
            console.log('Region', region)
        }


        // for(let i = 0; i < countries.length; i++) {
        //     if(countries[i].region === region){
        //         filteredByRegion.push(countries[i])
        //     }
        // }
        // setCountries(filteredByRegion)
        // console.log('Filtered', filteredByRegion)

        // if(name !== 'All') {
        //     fetchRegion()
        // }

    }, [name, region])

    
    return<div className="list">
        {countries.map((country) => <Card 
            name={country.name.common} 
            flag={country.flags.png} 
            population={country.population} 
            capital={country.capital}
            region={country.region}></Card>)}
    </div>
}

export default List




