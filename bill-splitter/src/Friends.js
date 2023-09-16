import "./Friends.css";
import FriendItem from "./FriendItem.js";
import NewFriend from "./NewFriend.js";
import React, { useState } from "react";
const Friends = ({ initialFriends, selectedFriend, selectHandler }) => {
  const [flag, setFlag] = useState(false);
  const addFriendHandler = () => {
    setFlag(!flag);
  };
  if (flag) {
    return (
      <div className="friends-wrapper">
        {console.log(initialFriends.name)}
        {initialFriends.map((data) => (
          <FriendItem
            dataProp={data}
            selectedFriend={selectedFriend}
            onSelection={selectHandler}
            key={data.id}
          />
        ))}

        <div className="add-friend-bt">
          <button onClick={addFriendHandler}>Add Friend</button>
        </div>
        <NewFriend flag={flag} setter={setFlag}/>
      </div>
    );
  } else {
    return (
      <div className="friends-wrapper">
        {console.log(initialFriends.name)}
        {initialFriends.map((data) => (
          <FriendItem
            dataProp={data}
            selectedFriend={selectedFriend}
            onSelection={selectHandler}
            key={data.id}
          />
        ))}

        <div className="add-friend-bt">
          <button onClick={addFriendHandler}>Add Friend</button>
        </div>
      </div>
    );
  }
};
export default Friends;
