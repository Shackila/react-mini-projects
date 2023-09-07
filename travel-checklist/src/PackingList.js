import "./PackingList.css";
import Item from "./Item.js";
import { useState } from "react";
const PackingList = ({ propItem, onDeleteItem, onToggleItem, onClearList }) => {
  let sortedItems;
  const [sortBy, setSortBy] = useState("input");
  if (sortBy === "input") sortedItems = propItem;
  if (sortBy === "description")
    sortedItems = propItem
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = propItem
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              itemProp={item}
              onDeleteItemProp={onDeleteItem}
              onToggleItemProp={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <footer>
        <span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort By Input</option>
            <option value="description">Sort By Description</option>
            <option value="packed">Sort By Packed</option>
          </select>
          <button className="clearListButton" onClick={() => onClearList()}>
            Clear List
          </button>
        </span>
      </footer>
    </div>
  );
};
export default PackingList;
