import "./Item.css";
const Item = ({ itemProp, onDeleteItemProp, onToggleItemProp }) => {
  return (
    <div className="listItem">
      <li>
        <span>
          <input
            type="checkbox"
            value={itemProp.packed}
            onChange={() => onToggleItemProp(itemProp.id)}
          />
          <span
            style={itemProp.packed ? { textDecoration: "line-through" } : {}}
          >
            {itemProp.quantity} {itemProp.description}
          </span>
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
