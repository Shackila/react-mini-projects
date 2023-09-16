import "./FriendItem.css";
const FriendsItem = ({ dataProp, onSelection }) => {
  return (
    <div>
      <div className="friend">
        <div>name: {dataProp.name}</div>
        <div>explanation:{dataProp.balance}</div>
        <div>
          {" "}
          <button onClick={() => onSelection(dataProp)}>select</button>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default FriendsItem;
