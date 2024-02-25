import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Component to make
 * Header
 * - Logo
 * - Nav-items
 * Body
 * - Search
 * - ResturantContainer
 * -ResturantCard
 *   - Img
 *   - Name of the restro, rating, Cuisine, Delivery Time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contant Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

// Way to write props

// 1.
/** 
const ResturantCard = (props) => {
  console.log(props);
  return (
    <div className="restro-card" style={styleCard}>
      <div className="restro-img">
        <img
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/45630e693c0b7584b790b3ba24de4cc1"
        />
      </div>
      <div className="res-name">
        <h3>{props.resName}</h3>
      </div>

      <h4>{props.cuisine}</h4>
      <h4>4.4 Stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

// 2. using destructing
const ResturantCard = ({ resName, cuisine }) => {
  //   console.log(props);
  return (
    <div className="restro-card" style={styleCard}>
      <div className="restro-img">
        <img
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/45630e693c0b7584b790b3ba24de4cc1"
        />
      </div>
      <div className="res-name">
        <h3>{resName}</h3>
      </div>

      <h4>{cuisine}</h4>
      <h4>4.4 Stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

// 3. using destructing
const ResturantCard = (props) => {
  const { resName, cuisine } = props;

  return (
    <div className="restro-card" style={styleCard}>
      <div className="restro-img">
        <img
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/45630e693c0b7584b790b3ba24de4cc1"
        />
      </div>
      <div className="res-name">
        <h3>{resName}</h3>
      </div>

      <h4>{cuisine}</h4>
      <h4>4.4 Stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

*/
const dataObj = [
  {
    type: "resturant",
    data: {
      resName: "Meghana Foods",
      cuisine: ["Biryani", "North Indian", "Asian"],
      avgRating: "3.3",
      rupees: 40000,
      devtime: "36",
      imgId: "45630e693c0b7584b790b3ba24de4cc1",
    },
  },
  {
    type: "resturant",
    data: {
      resName: "Nandhana Special  Meal",
      cuisine: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: "3.0",
      rupees: 270000,
      devtime: "36",
      imgId: "ybgtyavrqmdyznsvxa1t",
    },
  },
  {
    type: "resturant",
    data: {
      resName: "Truffles Center",
      cuisine: ["Banoffee Pie", "Mango Tart"],
      avgRating: "4.0",
      rupees: 270000,
      devtime: "30",
      imgId: "igpw68pz1jkc1phvvcgt",
    },
  },
  {
    type: "resturant",
    data: {
      resName: "Sorbetto - Ice Creams",
      cuisine: ["Hazelnut Cold Coffee", "Gelato Ice Cream"],
      avgRating: "5.0",
      rupees: 270000,
      devtime: "45",
      imgId: "b032659f932078ee6dea8f7c33b792cf",
    },
  },
  {
    type: "resturant",
    data: {
      resName: "Meghana Foods",
      cuisine: ["Biryani", "North Indian", "Asian"],
      avgRating: "3.3",
      rupees: 40000,
      devtime: "36",
      imgId: "45630e693c0b7584b790b3ba24de4cc1",
    },
  },
];
// const dataObj = {
//   resName: "Meghana Foods",
//   cuisine: ["Biryani", "North Indian", "Asian"],
//   avgRating: "3.3",
//   rupees: 40000,
//   devtime: "36",
//   imgId: "45630e693c0b7584b790b3ba24de4cc1",
// };

// 3. using destructing
const ResturantCard = (props) => {
  const { resData } = props;

  return (
    <div className="restro-card" style={styleCard}>
      <div className="restro-img">
        <img
          alt="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            resData.data.imgId
          }
        />
      </div>
      <div className="res-name">
        <h3>{resData.data.resName}</h3>
      </div>

      <h4>{resData.data.cuisine.join(", ")}</h4>
      <h4>{resData.data.avgRating} Stars</h4>
      <h4>${resData.data.rupees / 100} For Two</h4>
      <h4>{resData.data.devtime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        <ResturantCard resData={dataObj[0]} />
        <ResturantCard resData={dataObj[1]} />
        <ResturantCard resData={dataObj[2]} />
        <ResturantCard resData={dataObj[3]} />
        <ResturantCard resData={dataObj[4]} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<AppLayout />);

const cardCallback = (res) => {
  for (let i = 0; i < res.length; i++) {
    return <ResturantCard resData={res[i]} />;
  }
};

/********************************************************************************
 *  Modification of code / Config Driven Data(Ui Changes basedon data)
 * *****************************************************************************/

// use the above data
// 3. using destructing
const ResturantCard = (props) => {
  const { resData } = props;
  const { imgId, resName, cuisine, avgRating, rupees, devtime } = resData?.data;

  return (
    <div className="restro-card" style={styleCard}>
      <div className="restro-img">
        <img
          alt="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            imgId
          }
        />
      </div>
      <div className="res-name">
        <h3>{resName}</h3>
      </div>

      <h4>{cuisine.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>${rupees / 100} For Two</h4>
      <h4>{devtime} minutes</h4>
    </div>
  );
};
// const cardCallback = (res) => {
//   const output = [];
//   for (let i = 0; i < res.length; i++) {
//     output.push(<ResturantCard resData={res[i]} />);
//   }
//   return output;
// };
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {/* <ResturantCard resData={dataObj[0]} />
        <ResturantCard resData={dataObj[1]} />
        <ResturantCard resData={dataObj[2]} />
        <ResturantCard resData={dataObj[3]} />
        <ResturantCard resData={dataObj[4]} /> */}

        {/* 1 way */}

        {/* {dataObj.map(function (resturants) {
          return <ResturantCard resData={resturants} />;
        })} */}

        {/* {dataObj.map((res) => (
          <ResturantCard key={res.data.id} resData={res} />
        ))} */}

        {/* not using keys (not acceptable) << using index as key << Using unique value*/}

        {dataObj.map((res, index) => (
          <ResturantCard key={index} resData={res} />
        ))}
        {/* {cardCallback(dataObj)} */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<AppLayout />);
