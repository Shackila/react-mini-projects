const Inputs = ({ children }) => {
  return (
    <div>
      <label>{children}</label>
      <input type="number" />
      <hr />
    </div>
  );
};
export default Inputs;
