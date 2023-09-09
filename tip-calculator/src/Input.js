const Input = ({ bill, onSetBill }) => {
  return (
    <span>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </span>
  );
};
export default Input;
