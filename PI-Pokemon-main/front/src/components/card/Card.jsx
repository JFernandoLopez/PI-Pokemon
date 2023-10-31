
import { Link } from 'react-router-dom'

const Card = ( {id, name, image, type_id, onClose } ) => {
    const key = id
    return(
        <div className='Card'>
            <button onClick={() => {onClose(name)}} className='delete'>X</button>
            <p>{id}</p>
            <Link to={`/detail/${name}`}>
                <h2>{name}</h2>
            </Link>
            <img src={image} alt={name}/>
            {type_id.map(type => <h3>{type}</h3>)}
        </div>
    )

}

export default Card;