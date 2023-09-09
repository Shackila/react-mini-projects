import unsatisfied from "./gifs/unsatisfied.gif";
import satisfied from "./gifs/satisfied.gif";
import greatService from "./gifs/greatService.gif";
import "./styles.css";
const Gifs = ({ tipProp }) => {
  const isSatisfied = tipProp >= 10 && tipProp < 20;
  const isUnsatisfied = tipProp < 10;
  const isGreat = tipProp === 20;
  return (
    <div className="position">
      {isGreat && (
        <div>
          <img className="gif" src={greatService} alt="Great Service GIF" />
        </div>
      )}
      {isSatisfied && (
        <div>
          <img className="gif" src={satisfied} alt="Satisfied GIF" />
        </div>
      )}

      {isUnsatisfied && (
        <div>
          <img className="gif" src={unsatisfied} alt="Unsatisfied GIF" />
        </div>
      )}
    </div>
  );
};
export default Gifs;
