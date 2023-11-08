import { Link, useLocation } from "react-router-dom";
import './landingPage.css'

const LandingPage = () => {
    const location = useLocation();

    const firstLocation = location.pathname === '/'

    if(firstLocation){
    return (
        <div className="landing">
            <Link to='/home' className="toHomePage"><button className="toHomePage">Search Pokemons</button></Link>
        </div>
    )}
}

export default LandingPage;