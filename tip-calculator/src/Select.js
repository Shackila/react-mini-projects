import "./styles.css";
const Select = ({ rate, onSelect, children }) => {
  return (
    <span className="position ">
      <label>{children}</label>
      <select
        value={rate}
        onChange={(e) => onSelect(Number(e.target.value))}
        className="input"
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was ok (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </span>
  );
};
export default Select;
