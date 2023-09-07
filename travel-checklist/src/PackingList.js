import "./PackingList.css";
import Item from "./Item.js";
// import { useState } from "react";
const PackingList = ({ propItem }) => {
  return (
    <div className="list">
      <ul>
        {propItem.map((item) => (
          <Item key={item.id} itemProp={item} />
        ))}
      </ul>
    </div>
  );
};
export default PackingList;
