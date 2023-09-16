import Friends from "./Friends.js";
import Splitter from "./Splitter.js";
import { useState } from "react";
import "./Container.css";
const Container = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const selectHandler = (friend) => {
    setSelectedFriend(friend);
  };
  const initialFriends = [
    {
      name: "Negin",
      id: 123456,
      balance: 7,
    },
    {
      name: "Sima",
      id: 123457,
      balance: -21,
    },
    { name: "Ali", id: 123458, balance: 45 },
  ];
  return (
    <div>
      <div className="container">
        <Friends
          initialFriends={initialFriends}
          selectedFriend={selectedFriend}
          selectHandler={selectHandler}
        />
        {selectedFriend && (
          <Splitter selectedFriendName={selectedFriend.name} />
        )}
      </div>
    </div>
  );
};
export default Container;
