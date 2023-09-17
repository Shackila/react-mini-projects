import "./FriendItem.css";
const FriendsItem = ({ dataProp, onSelection, whoPays }) => {
  return (
    <div>
      <div className="friend">
        <div>name: {dataProp.name}</div>
        {dataProp.balance > 0 ? (
          <div>they owe you {dataProp.balance}$</div>
        ) : dataProp.balance < 0 ? (
          <div>you owe them {dataProp.balance}$</div>
        ) : (
          <div>you are even</div>
        )}

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
