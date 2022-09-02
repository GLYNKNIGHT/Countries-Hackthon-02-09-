import React from "react";
import  { useState, useEffect} from "react";

const List = () => {
    const  [countries, setCountries] = useState([])

    useEffect(() => {
    const fetchCountryData= async() => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const fetchCountries = await response.json()
        setCountries([fetchCountries])
        console.log([fetchCountries])
    }
    fetchCountryData()
    }, [])
}

export default List




