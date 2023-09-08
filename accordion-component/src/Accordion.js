import AccordionItem from "./AccordionItem.js";
import { useState } from "react";
import "./styles.css";
const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          text={el.text}
          num={i}
          key={i}
          curOpen={curOpen}
          onOpen={setCurOpen}
        />
      ))}
    </div>
  );
};
export default Accordion;
