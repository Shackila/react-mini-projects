import "./styles.css";
import { useState } from "react";

import Result from "./Result.js";
const Inputs = () => {
  const [bill, setBill] = useState(0);
  const [yourRate, setYourRate] = useState(0);
  const [friendRate, setFriendRate] = useState(0);
  const onResetHandler = () => {
    setBill(0);
    setYourRate(0);
    setFriendRate(0);
  };
  return (
    <div className="content">
      <span>
        How much was the bill?
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
        {/* {console.log(bill)}$ */}
      </span>
      <br /> <br /> <br />
      <span>
        How did you like the service?
        <select value={yourRate} onChange={(e) => setYourRate(e.target.value)}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was ok (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </span>
      {/* {console.log(yourRate)}$ */}
      <br /> <br /> <br />
      <span>
        How did your friend the service?
        <select
          value={friendRate}
          onChange={(e) => setFriendRate(e.target.value)}
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was ok (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
        {/* {console.log(friendRate)}$ */}
      </span>
      <br /> <br /> <br />
      <Result billAmount={bill} yourRate={yourRate} friendRate={friendRate} />
      <br /> <br /> <br />
      <button onClick={onResetHandler}>Reset</button>
      <br />
      <br /> <br /> <br /> <br />
      <br /> <br /> <br />
      {/* <Gifs yourRate={yourRate} friendRate={friendRate} /> */}
    </div>
  );
};
export default Inputs;
