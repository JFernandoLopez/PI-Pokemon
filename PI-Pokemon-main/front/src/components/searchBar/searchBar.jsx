import { useState } from "react"
import './searchBar.css'

const SearchBar = ({onSearch}) => {
    const[name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = async () =>{
        onSearch(name)
        setName('')
    }

    return(
        <div className="search">
            <input onChange={handleChange} type="search" value={name} className="searchBar" placeholder="Name"></input>
            <button onClick={handleClick} className="searchButton">Search Pokemon</button>
        </div>
    )
}

export default SearchBar