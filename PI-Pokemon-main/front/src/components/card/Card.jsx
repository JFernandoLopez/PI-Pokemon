import { Link } from 'react-router-dom'
import './card.css'

const Card = ( {id, name, image, type_id, onClose, auxiliar } ) => {
    return(
        <div className='Card' key ={id}>
            {!auxiliar && <button onClick={() => {onClose(name)}} className='delete'>X</button>}
            <p className='idCard'>{id}</p>
            <Link to={`/detail/${name}`}>
                <h2 className='nameCard'>{name}</h2>
            </Link>
            <img src={image} alt={name} height='175px' className='imageCard'/>
            {type_id.map((type, index) => <h3 key={index} className='type'>{type}</h3>)}
        </div>
    )

}

export default Card;