
const Input = ({nameForm, name, type, placeholder, onChange, max, min}) => {
    return(
        <div className="inputForm">
        <label htmlFor={nameForm} className='labelsForm'>{name}</label>
        <input type={type} name={nameForm} placeholder={placeholder} onChange={onChange} required max={max} min={min} className='inputsForm'/>
        </div>
    )
}

export default Input;
