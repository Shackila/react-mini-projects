import "./Item.css";
const Item = ({ itemProp, onDeleteItemProp }) => {
  return (
    <div className="listItem">
      <li>
        <span>
          {itemProp.quantity} {itemProp.description}
          {"  "}
          <button
            style={{ color: "red", fontWeight: "bolder" }}
            onClick={() => onDeleteItemProp(itemProp.id)}
          >
            ×
          </button>
        </span>
      </li>
    </div>
  );
};
export default Item;
