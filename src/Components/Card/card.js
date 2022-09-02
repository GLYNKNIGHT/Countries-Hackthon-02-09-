export default function Card({name, flag, capital, population, region}){
    return <div className='card'>
        <h3>{name}</h3>
        <img src={flag} alt={name}></img>
        <p>{capital}</p>
        <p>{population}</p>
        <p>{region}</p>
    </div>
}