import "./Stats.css";

const Stats = ({ itemProp }) => {
  const numItems = itemProp.length;
  const numPacked = itemProp.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numItems) * 100);
  return (
    <div className="stats-wrapper">
      <div className="stats">
        you have {numItems} items on your list, and you already packed{" "}
        {numPacked}({packedPercentage}%)
      </div>
    </div>
  );
};
export default Stats;
