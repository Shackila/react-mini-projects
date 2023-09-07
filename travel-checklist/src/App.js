import "./App.css";
import Logo from "./Logo.js";
import Form from "./Form.js";
import Stats from "./Stats.js";
import PackingList from "./PackingList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };
  const deleteItem = (id) => {
    setItems((items) => items.filter((propItem) => propItem.id !== id));
  };
  const toggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <div>
      <Logo />
      <Form onAddItem={addItem} key={new Date().getUTCMinutes} />
      <PackingList
        propItem={items}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        key={new Date().getUTCMilliseconds}
      />
      <Stats itemProp={items} />
    </div>
  );
}

export default App;
