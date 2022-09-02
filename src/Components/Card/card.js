export default function Card({name, flag, capital, population, region}){
    return <div className='card'>
        <img src={flag} alt={name}></img>
        <h4>{name}</h4>
        <p>Capital City:{capital}</p>
        <p>Population:{population}</p>
        <p>Region: {region}</p>
    </div>
}