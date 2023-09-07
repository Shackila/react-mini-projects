import AccordionItem from "./AccordionItem.js";
import "./styles.css";
const Accordion = ({ faqsProp }) => {
  return (
    <div>
      {faqsProp.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={i} />
      ))}
    </div>
  );
};
export default Accordion;
