
const Select = ({ name, values, handleChange }) => {
    return (
        <select name={name} onChange={handleChange} className={name}>
            {values.map((value) => {
                return <option value={value} key={value}>{value}</option>;
            })}
        </select>
    );
};

export default Select;