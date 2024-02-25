import { useContext } from "react";
import { CDN_URL } from "../utils/comman";
import UserContext from "../utils/UserContext";

// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };

// 3. using destructing
const ResturantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;
  // console.log(resData.info);
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    // deliveryTime,
    sla,
    cloudinaryImageId,
    id,
  } = resData;

  // const { deliveryTime } = resData?.info?.sla;
  // {
  //   console.log(resData);
  // }
  return (
    <div
      data-testid="resCard"
      className="mt-4 restro-card w-[250px] p-4  bg-gray-100 hover:bg-gray-200"
      // style={styleCard}
    >
      <div className="restro-img">
        <img
          className="rounded-md"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="res-name font-bold text-lg p-2">
        <h3>{name}</h3>
      </div>

      <h4 className="font-medium p-1">{cuisines && cuisines.join(", ")}</h4>
      <h4 className="font-medium p-1">{avgRating} Stars</h4>
      <h4 className="font-medium p-1">{costForTwo}</h4>
      <h4 className="font-medium p-1">{sla?.deliveryTime} minutes</h4>
      <h3>{id}</h3>
      <h3 className="font-medium p-1">User : {loggedInUser}</h3>
    </div>
  );
};

//Higher Order function

//Input =ResturantCard => ResturantCardPomoted

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black m-2 p-2 rounded-md text-white">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
