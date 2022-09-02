import React from "react";
import  { useState, useEffect} from "react";
import Card from "../Card/card";
const List = () => {
    const  [countries, setCountries] = useState([])

    useEffect(() => {
    const fetchCountryData= async() => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const fetchCountries = await response.json()
        setCountries(fetchCountries)
        console.log(fetchCountries)
    }
    fetchCountryData()
    }, [])


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




