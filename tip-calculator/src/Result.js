import Gifs from "./Gifs.js";
const Result = ({ billAmount, yourRate, friendRate }) => {
  const tip = Math.round(
    billAmount * ((Number(yourRate) + Number(friendRate)) / 2 / 100)
  );
  console.log(Number(yourRate) + Number(friendRate));
  return (
    <div>
      You should pay {billAmount + tip}$ (${billAmount} + ${tip} tip)
      <Gifs tipProp={tip} />
    </div>
  );
};
export default Result;
