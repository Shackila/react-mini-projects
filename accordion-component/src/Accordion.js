import AccordionItem from "./AccordionItem.js";
import "./styles.css";
const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={i} />
      ))}
    </div>
  );
};
export default Accordion;
