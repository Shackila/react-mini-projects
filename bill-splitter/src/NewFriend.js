import React, { useState } from "react";
const NewFriend = ({ flag, setter, initialFriends, dataSetter }) => {
  const [inputFriend, setInputFriend] = useState("");
  const closeButtonHandler = () => {
    setter(() => (flag = false));
  };
  const addFriendHandler = (e) => {
    e.preventDefault();
    if (inputFriend.trim() !== "") {
      const newFriend = {
        name: inputFriend,
        id: Math.random(),
        balance: 0,
      };
      dataSetter([...initialFriends, newFriend]);
      setInputFriend("");
    }
  };
  return (
    <div>
      <label>Friend Name:</label>
      <input
        type="text"
        value={inputFriend}
        onChange={(e) => setInputFriend(e.target.value)}
      />
      <button type="submit" onClick={addFriendHandler}>
        Add
      </button>
      <button onClick={closeButtonHandler}>close</button>
    </div>
  );
};
export default NewFriend;
