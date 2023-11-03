import Input from "../input/Input"
import Select from "../select/Select"

const Form = () => {
    return(
        <form action="" className="form">
            <Input nameForm='nameForm' name='Name:' type='text' placeholder="Pokemon Name"/>
            <Input nameForm='imageForm' name='Image:' type='text' placeholder=".jpg/.png"/>
            <Input nameForm='hpForm' name='Health Points:' type='number' placeholder="10"/>
            <Input nameForm='attackForm' name='Attack Points:' type='number' placeholder="10"/>
            <Input nameForm='defenseForm' name='Defense Points:' type='number' placeholder="10"/>
            <Input nameForm='speedForm' name='Speed:' type='number' placeholder="10"/>
            <Input nameForm='heightForm' name='Height:' type='number' placeholder="10"/>
            <Input nameForm='weightForm' name='Weight:' type='number' placeholder="10"/>
            <Input nameForm='weightForm' name='Weight:' type='number' placeholder="10"/>
            <Select name='selectFirstType' values={["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"]}  placeholder=''/>
            <Select name='selectSecondType' values={["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unknown", "shadow"]}  placeholder=''/>
            <input type="submit" name="ingresar"></input>
        </form>
    )
}

export default Form;