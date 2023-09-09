import Gifs from "./Gifs.js";
import "./styles.css";
const Result = ({ billAmount, yourRate, friendRate }) => {
  const averageRate = (yourRate + friendRate) / 2;
  const tip = Math.round(billAmount * (averageRate / 100));
  return (
    <div>
      <div className="position">
        You should pay {billAmount + tip}$ (${billAmount} + ${tip} tip)
      </div>
      <Gifs tipProp={averageRate} />
    </div>
  );
};
export default Result;
