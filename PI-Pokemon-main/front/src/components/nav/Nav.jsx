import Select from "../select/Select";
import SearchBar from "../searchBar/searchBar"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux"
import { filterByOrigin, filterByType, orderAlpha, orderAttack, resetFilters } from "../../redux/actions/actions"
import './Nav.css'

const Nav = ({onSearch}) => {
    const {pathname} = useLocation()
    const dispatch = useDispatch()

    const handleEvent = (event) => {
        if(event.target.name === "filterType"){
            dispatch(filterByType(event.target.value))
        } 
        if(event.target.name === 'filterOrigin'){
            dispatch(filterByOrigin(event.target.value))
        } 
        if(event.target.name === 'orderName'){
            dispatch(orderAlpha(event.target.value))
        } 
        if(event.target.name === 'orderAttack'){
            dispatch(orderAttack(event.target.value))
        }
    }

    const clean = () => {
        dispatch(resetFilters())
    }
    
    const firstLocation = pathname === '/'
    if(!firstLocation){
    return(
        <nav className="Nav">
           <SearchBar onSearch={onSearch}/>

           <Select name='filterType' values={["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"]} handleChange={handleEvent}/>

           <select name="filterOrigin" className="filterOrigin" onChange={handleEvent}>
                <option value='string'>Data Base</option>
                <option value='number'>API</option>
           </select>

           <Select name='orderName'  values={["Alphabeth A-Z", "Alphabeth Z-A"]} handleChange={handleEvent}/>

           <Select name='orderAttack' values={["Attack H-L", "Attack L-H"]} handleChange={handleEvent}/>

           <button onClick={() => clean()} className="navButtons">Clean Filters</button>

           {pathname !== '/home' && <Link to='/home'><button className="navButtons">Back Home</button></Link>}
           {pathname !== '/form' && <Link to='/form'><button className="navButtons">Create your Pokemon</button></Link>}
        </nav>
    )}
}

export default Nav;