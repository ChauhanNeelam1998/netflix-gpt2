import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
// import { MENU_API } from "../utils/comman";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  /**********************************************************/
  const [showIndex, setShowIndex] = useState(null);
  /**********************************************************/

  // const params = useParams();
  // console.log(params);

  const { resId } = useParams();
  console.log(resId);

  //Custom hook
  const resInfo = useResturantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const jsonMenu = await data.json();
  //   console.log(jsonMenu);
  //   console.log(
  //     jsonMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
  //       ?.card?.card?.itemCards
  //   );
  //   setResInfo(jsonMenu?.data);
  // };

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  // console.log(itemCards);
  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categoeries =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categoeries);

  return (
    <div className="menu text-center">
      <h1 className="font-bold text-2xl my-6 ">{name}</h1>
      <p className="font-medium">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categoeries.map((category, index) => {
        return (
          <ResturantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}

      {/* <h4>{`Rating ` + avgRating} </h4>
      <h2>Menu</h2>

      <ul> */}
      {/* <li>{itemCards[0].card.info.name}</li> */}
      {/* {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default ResturantMenu;
