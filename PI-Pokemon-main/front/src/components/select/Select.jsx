
const Select = ({ name, values, handleChange }) => {
    return (
        <select name={name} onChange={handleChange} className={name} placeholder="">
            {values.map((value) => {
                return <option value={value} key={value}>{value}</option>;
            })}
        </select>
    );
};

export default Select;