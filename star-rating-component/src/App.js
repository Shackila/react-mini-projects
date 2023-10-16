import { useState } from "react";
import Star from "./Star.js";
function App({ maxRating }) {
  const [rating, setRating] = useState(0);
  return (
    <div style={{ display: "inline" }}>
      {Array.from(
        { length: maxRating },
        (_, i /* loops over the numbers (i) not the elements (_) */) => (
          <span>
            <Star key={i} />
            <p>{rating}</p>
          </span>
        )
      )}
    </div>
  );
}

export default App;
