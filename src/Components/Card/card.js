

export default function Card({name, flag, capital, population, region}){
    return <div className='card' >
    <div className="image-container">
        <img src={flag} alt={name}></img>
        </div>   
        <div className="card-text">
        <h3>{name}</h3>
        <p><strong>Population:</strong> {population}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Capital City:</strong> {capital}</p>
    
    </div>
    </div>
       
}