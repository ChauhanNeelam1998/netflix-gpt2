import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
// import dataObj from "../utils/mockData";
import { useEffect, useState, useContext } from "react"; // named import
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
/****************************************************************************/
const Body = () => {
  //swiggy data = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

  const [listOfResturant, setlistOfResturant] = useState([]);
  const [filterResturants, setFilterResturants] = useState([]);
  // State variable for Search
  const [searchText, setSearchText] = useState("");

  //Higher Order Function
  const ResturantCardPomoted = withPromotedLabel(ResturantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    // console.log("useEffect");
    fecthData();
  }, []);
  // To Check render process
  //Whenever state variable updated, react tigger a reconciliation cycle(re-render the component)
  // console.log("Body Rendered");

  //jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.info

  const fecthData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1725542&lng=72.942537&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LIS"
    );
    const jsonData = await data.json();

    // console.log(
    //   jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
    setlistOfResturant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterResturants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(jsonData);
  };

  // Conditional Rendering
  // if (listOfResturant.length === 0) {
  //   return <Shimmer />;
  // }

  /*****************************************************
   * Check the status
   * **************************************************/

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks Like Something went's wrong! Please Check the Internet Connection.
      </h1>
    );

  return filterResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-4">
      {/* <div className="search">Search</div> */}

      {/* Button For Filter */}
      <div className="flex justify-center filter">
        {/* Button For Search
          - Filter the Restuerant and update the UI
          - SearchText -  We have to bind the searchText var. to input value so we get value
        */}
        <div className="search py-1">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black w-64  search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-200 px-4"
            onClick={() => {
              // console.log(searchText);
              const filteredSearcheResturant = listOfResturant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // console.log(filteredSearcheResturant);
              setFilterResturants(filteredSearcheResturant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="bg-gray-200 px-5 mx-4 filter-btn rounded-md"
          onClick={() => {
            const filterResturant = listOfResturant.filter(
              (res) => res.info.avgRating > 4
            );

            setlistOfResturant(filterResturant);
          }}
        >
          Top Rated Resturant
        </button>

        <div>
          <input
            type="text"
            className="border border-black px-3"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="restro-container1 grid grid-cols-4 ">
        {/* not using keys (not acceptable) << using index as key << Using unique value*/}

        {/* {filterResturants.map((res, index) => (
          <ResturantCard key={index} resData={res} />
        ))} */}

        {filterResturants.map((res) => (
          <Link
            to={"resturant/" + res.info.id}
            className="flex justify-center row"
            key={res.info.id}
          >
            {/* {if isOpen than show Promoted label other wise show normal card} */}
            {res.info.isOpen ? (
              <ResturantCardPomoted resData={res.info} />
            ) : (
              <ResturantCard resData={res.info} />
            )}

            {/* <ResturantCard resData={res} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
