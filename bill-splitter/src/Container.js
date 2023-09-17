import Friends from "./Friends.js";
import Splitter from "./Splitter.js";
import { useState } from "react";
import "./Container.css";
const Container = () => {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [whoPays, setWhoPays] = useState("You");
  const friendExpense = bill ? bill - yourExpense : "";
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

  const splitButtonHandler = (value) => {
    console.log(value);
    if (whoPays === "You") {
      console.log(`he owes you ${friendExpense}`);
      setData((friends) =>
        friends.map((friend) =>
          friend.id === selectedFriend.id
            ? { ...friend, balance: friend.balance + value }
            : friend
        )
      );
    } else {
      console.log(`you owe him ${yourExpense}`);
      setData((friends) =>
        friends.map((friend) =>
          friend.id === selectedFriend.id
            ? { ...friend, balance: friend.balance + value }
            : friend
        )
      );
    }
  };

  return (
    <div>
      <div className="container">
        <Friends
          initialFriends={data}
          dataSetter={setData}
          selectedFriend={selectedFriend}
          selectHandler={selectHandler}
          whoPays={whoPays}
        />
        {selectedFriend && (
          <Splitter
            // onSplitBill={splitButtonHandler}
            selectedData={data}
            setSelectedData={setData}
            selectedFriendName={selectedFriend.name}
            selectedFriend={selectedFriend}
            bill={bill}
            setBill={setBill}
            yourExpense={yourExpense}
            setYourExpense={setYourExpense}
            whoPays={whoPays}
            setWhoPays={setWhoPays}
            onSplitBill={splitButtonHandler}
            friendExpense={friendExpense}
          />
        )}
      </div>
    </div>
  );
};
export default Container;
