import "./styles.css";
const Input = ({ bill, onSetBill }) => {
  return (
    <span className="position">
      <label>How much was the bill?</label>
      <input
        className="input"
        placeholder="...$"
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </span>
  );
};
export default Input;
