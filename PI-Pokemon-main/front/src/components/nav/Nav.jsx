import { useLocation } from "react-router-dom";
import SearchBar from "../searchBar/searchBar"

const Nav = ({onSearch}) => {
    const {pathname} = useLocation()

    const firstLocation = pathname === '/'
    if(!firstLocation){
    return(
        <nav>
           <SearchBar onSearch={onSearch}/>
        </nav>
    )}
}

export default Nav;