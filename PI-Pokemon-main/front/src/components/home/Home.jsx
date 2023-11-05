import Cards from "../cards/Cards";

const Home = ({onClose}) => {
    return(
    <div>
    <Cards onClose={onClose}/>
    </div>
    )
}

export default Home;