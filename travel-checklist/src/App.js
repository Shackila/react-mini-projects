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
  return (
    <div>
      <Logo />
      <Form onAddItem={addItem} key={new Date().getUTCMinutes} />
      <PackingList propItem={items} key={new Date().getUTCMilliseconds} />
      <Stats />
    </div>
  );
}

export default App;
