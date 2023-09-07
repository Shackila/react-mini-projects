import { useState } from "react";
import "./Form.css";

const Form = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();
    if (description.trim() !== "") {
      const newItem = {
        description,
        quantity,
        isPacked: false,
        id: new Date().getSeconds(),
      };
      onAddItem(newItem);
      setQuantity(1);
      setDescription("");
    }
  };
  return (
    <div className="form-wrapper">
      <div className="form">
        <form onSubmit={submitHandler}>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))} //state changes
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
            onChange={(e) => setDescription(e.target.value)} //state changes
          ></input>
          <button type="submit" onClick={onAddItem}>
            Add
          </button>
        </form>
      </div>
      <hr />
    </div>
  );
};
export default Form;
