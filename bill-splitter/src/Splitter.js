import "./Splitter.css";
import React, { useState } from "react";

const Splitter = ({
  selectedFriendName,
  bill,
  setBill,
  yourExpense,
  setYourExpense,
  whoPays,
  setWhoPays,
  onSplitBill,
  friendExpense,
}) => {
  const handleBill = (e) => {
    const newValue = Number(e.target.value);
    setBill(newValue);
  };

  const handleYourExpense = (e) => {
    const newValue2 = Number(e.target.value);
    setYourExpense(newValue2);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!bill || !yourExpense) return;
    onSplitBill(whoPays === "You" ? friendExpense : -yourExpense);
  };

  // const friendExpense = bill ? bill - yourExpense : "";

  return (
    <form onSubmit={submitHandler}>
      <div className="splitter-wrapper">
        <h3>Spill A Bill With {selectedFriendName}</h3>
        <label>Bill Value: </label>
        <input value={bill} onChange={handleBill} />
        <hr />
        <label>Your Expense: </label>
        <input value={yourExpense} onChange={handleYourExpense} />
        <hr />
        <label>
          {" "}
          {console.log(friendExpense)}
          {selectedFriendName}'s Expense
        </label>
        <input type="text" value={friendExpense} readOnly />
        <hr />
        <div>
          <label>Who Is Paying The Bill?s</label>
          <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
            <option value="You">You</option>
            <option value="friend">{selectedFriendName}</option>
          </select>
        </div>
        <hr />
        <button>Spill Bill</button>
      </div>
    </form>
  );
};
export default Splitter;
