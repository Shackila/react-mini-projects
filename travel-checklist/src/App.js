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
  return (
    <div>
      <Logo />
      <Form onAddItem={addItem} key={new Date().getUTCMinutes} />
      <PackingList
        propItem={items}
        onDeleteItem={deleteItem}
        key={new Date().getUTCMilliseconds}
      />
      <Stats />
    </div>
  );
}

export default App;
