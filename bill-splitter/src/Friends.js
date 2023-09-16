import "./Friends.css";
import FriendItem from "./FriendItem.js";
import NewFriend from "./NewFriend.js";
import React, { useState } from "react";
const Friends = ({
  initialFriends,
  selectedFriend,
  selectHandler,
  dataSetter,
}) => {
  const [flag, setFlag] = useState(false);
  const addFriendHandler = () => {
    setFlag(!flag);
  };
  if (flag) {
    return (
      <div className="friends-wrapper">
        {initialFriends.map((mapData) => (
          <FriendItem
            dataProp={mapData}
            selectedFriend={selectedFriend}
            onSelection={selectHandler}
            key={mapData.id}
          />
        ))}

        <div className="add-friend-bt">
          <button onClick={addFriendHandler}>Add Friend</button>
        </div>
        <NewFriend
          flag={flag}
          setter={setFlag}
          initialFriends={initialFriends}
          dataSetter={dataSetter}
        />
      </div>
    );
  } else {
    return (
      <div className="friends-wrapper">
        {initialFriends.map((mapData) => (
          <FriendItem
            dataProp={mapData}
            selectedFriend={selectedFriend}
            onSelection={selectHandler}
            key={mapData.id}
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
