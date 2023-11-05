import { useState } from "react";
import Cards from "../cards/Cards";

const Home = ({onClose, previous, next}) => {
    return(
    <div>
    <Cards onClose={onClose}/>
    </div>
    )
}

export default Home;