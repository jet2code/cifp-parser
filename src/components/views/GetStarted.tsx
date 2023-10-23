import "../../assets/styles/reset.css";
import "../../assets/styles/main.css";
import Button from "../common/Button";

function GetStarted() {
  return (
    <div className="container">
      <h1>
        Welcome to <span className="text-primary">CIFP Parser</span>
      </h1>
      <p>
        A tool to <span className="font-bold text-primary">parse</span> CIFP
        data for airport procedures using{" "}
        <span className="font-bold text-primary">X-Plane's</span> CIFP.
      </p>
      <Button linkTo="/selectfolderdialog" text="Get Started" />
    </div>
  );
}

export default GetStarted;
