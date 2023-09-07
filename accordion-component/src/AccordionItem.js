import "./styles.css";
const AccordionItem = ({ num, text, title, icon }) => {
  return (
    <div>
      <p>{num}</p>
      <p>{text}</p>
      {/* <p>{icon}</p> */}
      <div>{title}</div>
    </div>
  );
};
export default AccordionItem;
