import { useEffect, useState } from "react"
import Validation from "./Validation"
import Input from "../input/Input"
import axios from 'axios'
import './from.css'
const types = ["","normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"]

const Form = () => {
    const [errors, setErrors] = useState({});
    const [newPokemon, setNewPokemon] = useState({
        name:"",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: []
    });
    const [touchedFields, setTouchedFields] = useState({
        name: false,
        image: false,
        hp: false,
        attack: false,
        defense: false,
        speed: false,
        height: false,
        weight: false,
      });


    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setNewPokemon({...newPokemon, [property]:value })
        handleFieldTouch(property);
    }

    const handleTypes = (event) => {
        const value = event.target.value;
        const className = event.target.className;

        const updatedTypes = [...newPokemon.types];

        if (className === 'typesForm1') {
            updatedTypes[0] = value;
            }

        if (className === 'typesForm2') {
            updatedTypes[1] = value;
            }

    setNewPokemon({
        ...newPokemon,
        types: updatedTypes.filter((type) => type !== '')
    });

    handleFieldTouch('types');
};

    const handleFieldTouch = (property) => {
        setTouchedFields({
        ...touchedFields,
        [property]: true,
        });
    };

    useEffect(() => {
            const pokemonValidated = Validation(newPokemon);
            setErrors(pokemonValidated)

    }, [newPokemon, touchedFields])

    const submitNewPokemon = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/pokemon", newPokemon)
        .then(res => alert(res))
        .catch(error => {
            console.log(error)
            alert('Something went wrong try one more time')})
    }

    return(
        <form onSubmit={submitNewPokemon} className="form">
            <h2 className="addAtributes">ADD SOME ATRIBUTES TO YOUR NEW POKEMON</h2>
            <ul className="putAtributes">
            <li className="form">
                <Input nameForm='name' name='Name: ' type='text' placeholder="Pokemon Name" onChange={handleChange} onBlur={() => handleFieldTouch('name')}/>
            {touchedFields.name && errors.name && <p style={{color: 'red'}}>{errors.name}</p>} 
            </li>

            <li className="form">
                <Input nameForm='image' name='Image: ' type='text' placeholder=".jpg/.png" onChange={handleChange} onBlur={() => handleFieldTouch('image')}/>
            {touchedFields.image && errors.image && <p style={{color: 'red'}}>{errors.image}</p>}
                </li>

            <li className="form">
                <Input nameForm='hp' name='Health Points: ' type='number' placeholder="10" onChange={handleChange} onBlur={() => handleFieldTouch('hp')} max='256' min='0'/>
            {touchedFields.hp && errors.hp && <p style={{color: 'red'}}>{errors.hp}</p>}
            </li>

            <li className="form">
                <Input nameForm='attack' name='Attack Points: ' type='number' placeholder="10" onChange={handleChange} onBlur={() => handleFieldTouch('attack')} max='191' min='0'/>
            {touchedFields.attack && errors.attack && <p style={{color: 'red'}}>{errors.attack}</p>}
            </li>           

            <li className="form">
                <Input nameForm='defense' name='Defense Points: ' type='number' placeholder="10" onChange={handleChange} onBlur={() => handleFieldTouch('defense')} max='231' min='0'/>
            {touchedFields.defense && errors.defense && <p style={{color: 'red'}}>{errors.defense}</p>}
            </li>

            <li className="form">
                <Input nameForm='speed' name='Speed: ' type='number' placeholder="10" onChange={handleChange} onBlur={() => handleFieldTouch('speed')} max='138' min='0'/>
            {touchedFields.speed && errors.speed && <p style={{color: 'red'}}>{errors.speed}</p>}
            </li>       

            <li className="form">
                <Input nameForm='height' name='Height: ' type='number' placeholder="10" onChange={handleChange} onBlur={() => handleFieldTouch('height')} max='200' min='0'/>
                
            {touchedFields.height && errors.height && <p style={{color: 'red'}}>{errors.height}</p>}
            </li>       
            
            <li className="form">
                <Input nameForm='weight' name='Weight: ' type='number' placeholder="10" onChange={handleChange} onBlur={() => handleFieldTouch('weight')} max='9999' min='0'/>
            
            {touchedFields.weight && errors.weight && <p style={{color: 'red'}}>{errors.weight}</p>}    
            </li>       

            <li>
                <select name='types' onChange={handleTypes} className='typesForm1' onBlur={() => handleFieldTouch('types')}>
                    {types.map((type, index) => <option value={type} key={index}>{type}</option>)}
                </select>
                <select name='types' onChange={handleTypes} className='typesForm2' onBlur={() => handleFieldTouch('types')}>
                {types.map((type, index) => <option value={type} key={index}>{type}</option>)}
                </select>
            {errors.types && <p style={{color: 'yellow'}}>{errors.types}</p>}
            
            
            </li>

            </ul>

            {(errors.types ||errors.name || errors.image) && <input className='submitDisabled' type="submit" name="ingresar" value='Create Pokemon' disabled/>}

            {!errors.types && !errors.name && !errors.image && <input className='submitAvailable' type="submit" name="ingresar" value='Create Pokemon'/>}
        </form>
    )
}

export default Form;