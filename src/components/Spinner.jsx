import "./Spinner.css";
import { ReactComponent as SpinnerSvg } from "../../src/icons/real_spinner.svg";

function Spinner() {
  return (
    <div>
      <SpinnerSvg className="spinner-size-control"/>
    </div>
  );
}

export default Spinner;
