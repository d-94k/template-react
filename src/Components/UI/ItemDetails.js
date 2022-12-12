import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../../Database";
const ItemDetails = () => {
  //const { id, name, price, image, description } = DATA;
  const itemIt = useParams();
  return (
    <Fragment>
      {/*<h1>{itemIt.id}Details</h1>
      <div>
        <div>
          <img width="350px" alt="" src={image} />
        </div>
        <div>
          <h3 className="">Name: {name}</h3>
          <div className="">
            <strong>Price:</strong> €{price}
          </div>
          <div className="">
            <strong>Description:</strong>
          </div>
        </div>
      </div> */}
      {DATA.map((item) => (
        <div>
          <div>
            <img src={item.image} alt="" />
          </div>
          <div>
            <p>{item.name}</p>
          </div>
          <div>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default ItemDetails;
