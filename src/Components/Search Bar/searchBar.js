export default function SearchBar({onInput, onSelect}){



    return<div className="search-bar">
    <input type='text' placeholder='Search Country Here' onChange={onInput} className='text-search'/>
   
    <select name='Region' id='region' onChange={onSelect} className='region-search'>
       <option disabled selected hidden>Filter by region</option>
       <option value='Africa'>Africa</option>
       <option value='Americas'>Americas</option>
       <option value='Asia'>Asia</option>
       <option value='Europe'>Europe</option>
       <option value='Oceania'>Oceania</option>
    </select>
    
    </div>
}