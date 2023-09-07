import "./PackingList.css";
import Item from "./Item.js";
// import { useState } from "react";
const PackingList = ({ propItem, onDeleteItem, onToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {propItem.map((item) => (
          <Item key={item.id} itemProp={item} onDeleteItemProp={onDeleteItem} onToggleItemProp={onToggleItem} />
        ))}
      </ul>
    </div>
  );
};
export default PackingList;
