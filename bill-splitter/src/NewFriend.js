const NewFriend = ({ flag, setter }) => {
  const closeButtonHandler = () => {
    setter(() => (flag = false));
  };
  return (
    <div>
      <label>Friend Name:</label>
      <input type="text" />
      <button>Add</button>
      <button onClick={closeButtonHandler}>close</button>
    </div>
  );
};
export default NewFriend;
