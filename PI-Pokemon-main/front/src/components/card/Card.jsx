
import { Link } from 'react-router-dom'

const Card = ( {id, name, image, type_id, onClose } ) => {
    return(
        <div className='Card' key ={id}>
            <button onClick={() => {onClose(name)}} className='delete'>X</button>
            <p>{id}</p>
            <Link to={`/detail/${name}`}>
                <h2>{name}</h2>
            </Link>
            <img src={image} alt={name} height='175px'/>
            {type_id.map((type, index) => <h3 key={index}>{type}</h3>)}
        </div>
    )

}

export default Card;