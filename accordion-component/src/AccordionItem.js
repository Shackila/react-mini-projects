import "./styles.css";
// import { useState } from "react";
const AccordionItem = ({ num, text, title, curOpen, onOpen }) => {
  const isOpen = num === curOpen;
  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };
  return (
    <div className={`item ${!isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "+" : "-"}</p>
      <div>{isOpen && <div className="context-box">{text}</div>}</div>
    </div>
  );
};
export default AccordionItem;
