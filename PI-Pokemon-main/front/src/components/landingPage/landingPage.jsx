import { Link, useLocation } from "react-router-dom";

const LandingPage = () => {
    const location = useLocation();

    const firstLocation = location.pathname === '/'

    if(firstLocation){
    return (
        <div>
            <button className="toHomePage"><Link to='/home'>Search Pokemons</Link></button>
        </div>
    )}
}

export default LandingPage;