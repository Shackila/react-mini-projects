import "./styles.css";
import { useState } from "react";
const AccordionItem = ({ num, text, title, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`item ${!isOpen ? "open" : ""}`}
      onClick={(e) => setIsOpen(!isOpen)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "+" : "-"}</p>
      <div>{isOpen && <div className="context-box">{text}</div>}</div>
    </div>
  );
};
export default AccordionItem;
