import { useEffect, useState } from "react"
import Validation from "./Validation"
import Input from "../input/Input"
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
        types: ["",""]
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
        types: updatedTypes
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
        if(newPokemon.name === '' || newPokemon.image === '' || newPokemon.hp === '' || newPokemon.defense === '' || newPokemon.attack === '' || newPokemon.height === '' || newPokemon.weight === '' || newPokemon.speed === '' || newPokemon.types == ['' , '']){
            const pokemonValidated = Validation(newPokemon);
            setErrors(pokemonValidated)
        }

    }, [newPokemon])

    const submitNewPokemon = (event) => {
        event.preventDefault()
    }

    return(
        <form onSubmit={submitNewPokemon} className="form">
            <Input nameForm='name' name='Name:' type='text' placeholder="Pokemon Name" onChange={handleChange} onBlur={() => handleFieldTouch('name')}/>
            {touchedFields.name && errors.name && <p style={{color: 'red'}}>{errors.name}</p>}

            <Input nameForm='image' name='Image:' type='text' placeholder=".jpg/.png" onChange={handleChange} onBlur={() => handleFieldTouch('image')}/>
            {touchedFields.image && errors.image && <p style={{color: 'red'}}>{errors.image}</p>}

            <Input nameForm='hp' name='Health Points:' type='number' placeholder="10" onChange={handleChange} onBlur={() => handleFieldTouch('hp')}/>
            {touchedFields.hp && errors.hp && <p style={{color: 'red'}}>{errors.hp}</p>}

            <Input nameForm='attack' name='Attack Points:' type='number' placeholder="10" onChange={handleChange} onBlur={() => handleFieldTouch('attack')}/>
            {touchedFields.attack && errors.attack && <p style={{color: 'red'}}>{errors.attack}</p>}

            <Input nameForm='defense' name='Defense Points:' type='number' placeholder="10" onChange={handleChange} onBlur={() => handleFieldTouch('defense')}/>
            {touchedFields.defense && errors.defense && <p style={{color: 'red'}}>{errors.defense}</p>}

            <Input nameForm='speed' name='Speed:' type='number' placeholder="10" onChange={handleChange} onBlur={() => handleFieldTouch('speed')}/>
            {touchedFields.speed && errors.speed && <p style={{color: 'red'}}>{errors.speed}</p>}

            <Input nameForm='height' name='Height:' type='number' placeholder="10" onChange={handleChange} onBlur={() => handleFieldTouch('height')}/>
            {touchedFields.height && errors.height && <p style={{color: 'red'}}>{errors.height}</p>}

            <Input nameForm='weight' name='Weight:' type='number' placeholder="10" onChange={handleChange} onBlur={() => handleFieldTouch('weight')}/>
            {touchedFields.weight && errors.weight && <p style={{color: 'red'}}>{errors.weight}</p>}

            <select name='types' onChange={handleTypes} className='typesForm1' onBlur={() => handleFieldTouch('types')}>
                {types.map((type, index) => <option value={type} key={index}>{type}</option>)}
            </select>
            <select name='types' onChange={handleTypes} className='typesForm2' onBlur={() => handleFieldTouch('types')}>
                {types.map((type, index) => <option value={type} key={index}>{type}</option>)}
            </select>
            {errors.types && <p style={{color: 'red'}}>{errors.types}</p>}

            <input type="submit" name="ingresar"></input>
        </form>
    )
}

export default Form;