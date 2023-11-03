
const Input = ({nameForm, name, type, placeholder}) => {
    return(
        <div>
        <label htmlFor={nameForm}>{name}</label>
        <input type={type} name={nameForm} placeholder={placeholder} required/>
        </div>
    )
}

export default Input;
