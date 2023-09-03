import { useState } from "react";
import "./Form.css";
import PackingList from "./PackingList.js";

const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
    console.log(description); 
  };
  return (
    <div className="form-wrapper">
      <div className="form">
        <form onSubmit={submitHandler}>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <button type="submit">ADD</button>
        </form>
      </div>
      <hr />
      <PackingList descriptionName={description} quantityCount={quantity} />
    </div>
  );
};
export default Form;
