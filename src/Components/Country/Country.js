import { useLocation } from 'react-router-dom'


export default function CountryPage(){
    const location = useLocation()
    const {from} = location.state
    const country = from.country
   

    return<><div className='page'>
           <h1>{country.name.common}</h1>
          
          
        <img src={country.flags.png} alt={from.country.name} className='page-image'></img>
        <div className="page-text">
       
        <p><strong>Population:</strong> {country.population}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital City:</strong> {country.capital}</p>
        <a href={country.maps.googleMaps} target='blank'> See on a map</a>
</div>
    </div>
    </>
}