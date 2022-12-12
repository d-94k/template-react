import { Link } from "react-router-dom";
import Card from "./Card";

const Items = (props) => {
  return (
    <li>
      <Card>
        <div className="cover">
          <img src={props.image} alt="" />
        </div>
        <h3>{props.name}</h3>
        <h2 className="price">{props.price}</h2>
      </Card>
      <Link to={`item/${props.name}`} className="link">
        Item details
      </Link>
    </li>
  );
};

export default Items;
