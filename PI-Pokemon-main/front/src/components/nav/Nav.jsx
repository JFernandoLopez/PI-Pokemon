import { useLocation } from "react-router-dom";
import SearchBar from "../searchBar/searchBar"
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = ({onSearch}) => {
    const {pathname} = useLocation()

    const firstLocation = pathname === '/'
    if(!firstLocation){
    return(
        <nav className="Nav">
           <SearchBar onSearch={onSearch}/>
           {pathname !== '/home' && <Link to='/home'><button>Back Home</button></Link>}
        </nav>
    )}
}

export default Nav;