import "./PackingList.css";
import Item from "./Item.js";
// import { useState } from "react";
const PackingList = (props) => {
  const newItem = [
    {
      description: props.descriptionName,
      quantity: props.quantityCount,
      isPacked: false,
      id: new Date(),
    },
  ];
  return (
    <div>
      <div className="list">
        {newItem.map((item) => (
          <Item itemProp={item} />
        ))}
      </div>
      <hr />
    </div>
  );
};
export default PackingList;
