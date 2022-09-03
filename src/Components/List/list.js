import Card from "../Card/card";
import {Link} from "react-router-dom";


const List = ({ name, region, countries }) => {
   






    
  
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




