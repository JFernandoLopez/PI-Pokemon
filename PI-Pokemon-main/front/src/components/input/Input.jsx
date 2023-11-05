
const Input = ({nameForm, name, type, placeholder, onChange, max, min}) => {
    return(
        <div>
        <label htmlFor={nameForm}>{name}</label>
        <input type={type} name={nameForm} placeholder={placeholder} onChange={onChange} required max={max} min={min}/>
        </div>
    )
}

export default Input;
