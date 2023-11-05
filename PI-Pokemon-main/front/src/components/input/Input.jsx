
const Input = ({nameForm, name, type, placeholder, onChange}) => {
    return(
        <div>
        <label htmlFor={nameForm}>{name}</label>
        <input type={type} name={nameForm} placeholder={placeholder} onChange={onChange} required/>
        </div>
    )
}

export default Input;
