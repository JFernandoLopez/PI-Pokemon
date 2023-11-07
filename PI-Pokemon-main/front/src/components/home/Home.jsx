import Cards from "../cards/Cards";
import './home.css'

const Home = ({onClose}) => {
    return(
    <div className="home">
    <Cards onClose={onClose}/>
    </div>
    )
}

export default Home;