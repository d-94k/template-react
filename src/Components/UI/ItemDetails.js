import { Fragment } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const itemIt = useParams();
  return (
    <Fragment>
      <h1>{itemIt.id}Details</h1>
      <div>
        <div>
          <img width="350px" alt="" src={""} />
        </div>
        <div>
          <h3 className="">Name: {""}</h3>
          <div className="">
            <strong>Price:</strong> €{""}
          </div>
          <div className="">
            <strong>Description:</strong>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemDetails;
