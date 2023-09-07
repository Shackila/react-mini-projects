import "./Item.css";
const Item = (props) => {
  return (
    <div className="listItem">
      <li>
        <span>
          {""}
          {props.itemProp.quantity} {props.itemProp.description}
        </span>
      </li>
    </div>
  );
};
export default Item;
