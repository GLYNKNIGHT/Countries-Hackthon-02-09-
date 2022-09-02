import React from "react";
import  { useState, useEffect} from "react";
import Card from "../Card/card";
import {Link} from "react-router-dom";

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
        {countries.map((country) => <Link to='/country' state={{ from: {country} }} style={{ textDecoration: 'none', color: 'black'}}><Card
                        name={country.name.common} 
            flag={country.flags.png} 
            population={country.population} 
            capital={country.capital}
            region={country.region}></Card></Link>)}
    </div>
}

export default List




