import Friends from "./Friends.js";
import Splitter from "./Splitter.js";
import { useState } from "react";
import "./Container.css";
const Container = () => {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [data, setData] = useState([
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
  ]);
  const selectHandler = (friend) => {
    setSelectedFriend(friend);
  };

  return (
    <div>
      <div className="container">
        <Friends
          initialFriends={data}
          dataSetter={setData}
          selectedFriend={selectedFriend}
          selectHandler={selectHandler}
        />
        {selectedFriend && (
          <Splitter
            selectedData={data}
            setSelectedData={setData}
            selectedFriendName={selectedFriend.name}
            bill={bill}
            setBill={setBill}
            yourExpense={yourExpense}
            setYourExpense={setYourExpense}
          />
        )}
      </div>
    </div>
  );
};
export default Container;
