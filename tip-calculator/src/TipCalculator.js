import "./styles.css";
import { useState } from "react";
import Select from "./Select.js";
import Input from "./Input.js";
import Result from "./Result.js";
const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [yourRate, setYourRate] = useState(0);
  const [friendRate, setFriendRate] = useState(0);
  const onResetHandler = () => {
    setBill("");
    setYourRate(0);
    setFriendRate(0);
  };
  return (
    <div className="content">
      <Input bill={bill} onSetBill={setBill} />
      <Select rate={yourRate} onSelect={setYourRate}>
        How did you like the service?
      </Select>
      <Select rate={friendRate} onSelect={setFriendRate}>
        How did your friend like the service?
      </Select>
      {bill > 0 && (
        <div>
          <Result
            billAmount={bill}
            yourRate={yourRate}
            friendRate={friendRate}
          />
          <button className="position button" onClick={onResetHandler}>
            Reset
          </button>
        </div>
      )}
      <br />
    </div>
  );
};
export default TipCalculator;
