import "./Splitter.css";
import Inputs from "./Inputs.js";
import Select from "./Select.js";
const Splitter = ({ selectedFriendName }) => {
  return (
    <div className="splitter-wrapper">
      <h3>Spill A Bill With {selectedFriendName}</h3>
      <Inputs>Bill Value</Inputs>
      <Inputs>Your Expense</Inputs>
      <Inputs>{selectedFriendName}'s Expense</Inputs>
      <Select>Who Is Paying The Bill?</Select>
      <hr/>
      <button>Spill Bill</button>
    </div>
  );
};
export default Splitter;
