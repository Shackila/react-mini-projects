const Select = ({ children }) => {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option>You</option>
        <option>Your Friend</option>
      </select>
    </div>
  );
};
export default Select;
