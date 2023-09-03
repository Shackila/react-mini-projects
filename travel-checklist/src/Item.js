const Item = (props) => {
  return (
    <div>
      <li>
        <span>
          {props.itemProp.quantity} {props.itemProp.description}
        </span>
      </li>
    </div>
  );
};
export default Item;
