import { Link } from "react-router-dom";

interface ButtonProps {
  id?: string;
  onClick?: () => void;
  text: string;
  linkTo?: string;
}

export default function Button(props: ButtonProps) {
  if (props.linkTo) {
    return (
      <Link to={props.linkTo} className="btn-primary">
        {props.text}
      </Link>
    );
  }

  return (
    <button className="btn-primary" type="button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}
