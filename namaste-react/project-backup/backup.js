import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am a h1 tag from parent div!"),
//     React.createElement("h2", {}, "I am a h2 tag!"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am a h1 tag from child div!"),
//     React.createElement("h2", {}, "I am a h2 tag!"),
//   ]),
// ]);
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/** 
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Word From React!"
);
*/

/**
 * <div id= "parent">
 *      <div id="child1">
            <h1>I am a h1 tag!</h1>
            <h2>I am a h1 tag!</h2>
        </div>
        <div id="chid2">
            <h1>I am a h1 tag!</h1>
            <h2>I am a h1 tag!</h2>
        </div>

 * </div>
 */

// Writtng an HTML Using JSX

//React Element
const heading = (
  <h1 className="head">Namaste React From React Using JSX !🚀</h1>
);

//Functional Component

//using () and return keyword

const HeadingComponent1 = () => {
  return (
    <h1 className="head">
      Namaste React From React Using FunctionalComponent !🚀
    </h1>
  );
};

const HeadingComponent2 = () => <h1>React Using FunctionalComponent !🚀</h1>;

const Tile = function () {
  return (
    <h1 className="head">
      This is Component Composition and using return and paranthesis!🚀
    </h1>
  );
};

const HeadingComponent = () => (
  <div className="container">
    <Tile />
    <h1 className="head">
      Namaste React From React Using FunctionalComponent !🚀
    </h1>
  </div>
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<HeadingComponent />);

/***********************************************************************/
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am a h1 tag from parent div!"),
//     React.createElement("h2", {}, "I am a h2 tag!"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am a h1 tag from child div!"),
//     React.createElement("h2", {}, "I am a h2 tag!"),
//   ]),
// ]);
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/** 
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Word From React!"
);
*/

/**
 * <div id= "parent">
 *      <div id="child1">
            <h1>I am a h1 tag!</h1>
            <h2>I am a h1 tag!</h2>
        </div>
        <div id="chid2">
            <h1>I am a h1 tag!</h1>
            <h2>I am a h1 tag!</h2>
        </div>

 * </div>
 */

// Writtng an HTML Using JSX

//React Element
const heading = (
  <h1 className="head">Namaste React From React Using JSX !🚀</h1>
);

//Functional Component

//using () and return keyword

// const Element = () => <h2>I am a React Element</h2>;
const element = <h3>I am a React Element</h3>;

const Title = () => {
  return (
    <div className="head">
      <h2>This is Component Composition and using return and paranthesis!🚀</h2>
      {element}
    </div>
  );
};

const HeadingComponent = () => (
  <div className="container">
    <h1 className="head">
      Namaste React From React Using FunctionalComponent !🚀
    </h1>
    {/* Different way to call component */}
    {Title()}
    <Title></Title>
    <Title />
  </div>
);



/****************************************************
 * ***************************************************/ 
import ResturantCard from "./ResturantCard";
import dataObj from "../utils/mockData";
import { useState } from "react"; // named import

/************************************Data********************************************/

// let listOfResturantJS = [
//   {
//     data: {
//       id: 1,
//       resName: "Meghana Foods",
//       cuisine: ["Biryani", "North Indian", "Asian"],
//       avgRating: "3.3",
//       rupees: 40000,
//       devtime: "36",
//       imgId: "45630e693c0b7584b790b3ba24de4cc1",
//     },
//   },
//   {
//     data: {
//       id: 2,
//       resName: "Nandhana Special  Meal",
//       cuisine: ["Bakery", "Desserts", "Beverages", "Snacks"],
//       avgRating: "3.0",
//       rupees: 270000,
//       devtime: "36",
//       imgId: "ybgtyavrqmdyznsvxa1t",
//     },
//   },
//   {
//     data: {
//       id: 3,
//       resName: "Truffles Center",
//       cuisine: ["Banoffee Pie", "Mango Tart"],
//       avgRating: "4.4",
//       rupees: 270000,
//       devtime: "30",
//       imgId: "igpw68pz1jkc1phvvcgt",
//     },
//   },
//   {
//     data: {
//       id: 4,
//       resName: "Sorbetto - Ice Creams",
//       cuisine: ["Hazelnut Cold Coffee", "Gelato Ice Cream"],
//       avgRating: "5.0",
//       rupees: 270000,
//       devtime: "45",
//       imgId: "b032659f932078ee6dea8f7c33b792cf",
//     },
//   },
//   {
//     data: {
//       id: 5,
//       resName: "Meghana Foods",
//       cuisine: ["Biryani", "North Indian", "Asian"],
//       avgRating: "3.3",
//       rupees: 40000,
//       devtime: "36",
//       imgId: "45630e693c0b7584b790b3ba24de4cc1",
//     },
//   },
// ];

/****************************************************************************/
const Body = () => {
  // Local state vaeriable - Super powerful variable
  // listOfResturant = state variable / listOfResturant = dataObj
  // setlistOfResturant = function to update the super variable or state variable
  // useState() = we can pass inside this function is default value for state variable. const [res] = useState([]), const [res] = useState(null)

  // const [listOfResturant, setlistOfResturant] = useState([
  //   {
  //     data: {
  //       id: 1,
  //       resName: "Meghana Foods",
  //       cuisine: ["Biryani", "North Indian", "Asian"],
  //       avgRating: "3.3",
  //       rupees: 40000,
  //       devtime: "36",
  //       imgId: "45630e693c0b7584b790b3ba24de4cc1",
  //     },
  //   },
  //   {
  //     data: {
  //       id: 2,
  //       resName: "Nandhana Special  Meal",
  //       cuisine: ["Bakery", "Desserts", "Beverages", "Snacks"],
  //       avgRating: "3.0",
  //       rupees: 270000,
  //       devtime: "36",
  //       imgId: "ybgtyavrqmdyznsvxa1t",
  //     },
  //   },
  //   {
  //     data: {
  //       id: 3,
  //       resName: "Truffles Center",
  //       cuisine: ["Banoffee Pie", "Mango Tart"],
  //       avgRating: "4.4",
  //       rupees: 270000,
  //       devtime: "30",
  //       imgId: "igpw68pz1jkc1phvvcgt",
  //     },
  //   },
  //   {
  //     data: {
  //       id: 4,
  //       resName: "Sorbetto - Ice Creams",
  //       cuisine: ["Hazelnut Cold Coffee", "Gelato Ice Cream"],
  //       avgRating: "5.0",
  //       rupees: 270000,
  //       devtime: "45",
  //       imgId: "b032659f932078ee6dea8f7c33b792cf",
  //     },
  //   },
  //   {
  //     data: {
  //       id: 5,
  //       resName: "Meghana Foods",
  //       cuisine: ["Biryani", "North Indian", "Asian"],
  //       avgRating: "3.3",
  //       rupees: 40000,
  //       devtime: "36",
  //       imgId: "45630e693c0b7584b790b3ba24de4cc1",
  //     },
  //   },
  // ]);
  //swiggy data = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  const [listOfResturant, setlistOfResturant] = useState(dataObj);

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterResturant = listOfResturant.filter(
              (res) => res.data.avgRating > 4
            );

            setlistOfResturant(filterResturant);
            // return listOfResturant;
            // console.log(listOfResturant);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
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

        {listOfResturant.map((res, index) => (
          <ResturantCard key={index} resData={res} />
        ))}
        {/* {cardCallback(dataObj)} */}
      </div>
    </div>
  );
};
export default Body;


/*****************************************
 * *************************************************/ 

import ResturantCard from "./ResturantCard";
import dataObj from "../utils/mockData";
import { useState } from "react"; // named import

/************************************Data********************************************/

// let listOfResturantJS = [
//   {
//     data: {
//       id: 1,
//       resName: "Meghana Foods",
//       cuisine: ["Biryani", "North Indian", "Asian"],
//       avgRating: "3.3",
//       rupees: 40000,
//       devtime: "36",
//       imgId: "45630e693c0b7584b790b3ba24de4cc1",
//     },
//   },
//   {
//     data: {
//       id: 2,
//       resName: "Nandhana Special  Meal",
//       cuisine: ["Bakery", "Desserts", "Beverages", "Snacks"],
//       avgRating: "3.0",
//       rupees: 270000,
//       devtime: "36",
//       imgId: "ybgtyavrqmdyznsvxa1t",
//     },
//   },
//   {
//     data: {
//       id: 3,
//       resName: "Truffles Center",
//       cuisine: ["Banoffee Pie", "Mango Tart"],
//       avgRating: "4.4",
//       rupees: 270000,
//       devtime: "30",
//       imgId: "igpw68pz1jkc1phvvcgt",
//     },
//   },
//   {
//     data: {
//       id: 4,
//       resName: "Sorbetto - Ice Creams",
//       cuisine: ["Hazelnut Cold Coffee", "Gelato Ice Cream"],
//       avgRating: "5.0",
//       rupees: 270000,
//       devtime: "45",
//       imgId: "b032659f932078ee6dea8f7c33b792cf",
//     },
//   },
//   {
//     data: {
//       id: 5,
//       resName: "Meghana Foods",
//       cuisine: ["Biryani", "North Indian", "Asian"],
//       avgRating: "3.3",
//       rupees: 40000,
//       devtime: "36",
//       imgId: "45630e693c0b7584b790b3ba24de4cc1",
//     },
//   },
// ];

/**************************************
 *  UseSate() and mockdata
 * **************************************/
const Body = () => {
  // Local state vaeriable - Super powerful variable
  // listOfResturant = state variable / listOfResturant = dataObj
  // setlistOfResturant = function to update the super variable or state variable
  // useState() = we can pass inside this function is default value for state variable. const [res] = useState([]), const [res] = useState(null)

  // const [listOfResturant, setlistOfResturant] = useState([
  //   {
  //     data: {
  //       id: 1,
  //       resName: "Meghana Foods",
  //       cuisine: ["Biryani", "North Indian", "Asian"],
  //       avgRating: "3.3",
  //       rupees: 40000,
  //       devtime: "36",
  //       imgId: "45630e693c0b7584b790b3ba24de4cc1",
  //     },
  //   },
  //   {
  //     data: {
  //       id: 2,
  //       resName: "Nandhana Special  Meal",
  //       cuisine: ["Bakery", "Desserts", "Beverages", "Snacks"],
  //       avgRating: "3.0",
  //       rupees: 270000,
  //       devtime: "36",
  //       imgId: "ybgtyavrqmdyznsvxa1t",
  //     },
  //   },
  //   {
  //     data: {
  //       id: 3,
  //       resName: "Truffles Center",
  //       cuisine: ["Banoffee Pie", "Mango Tart"],
  //       avgRating: "4.4",
  //       rupees: 270000,
  //       devtime: "30",
  //       imgId: "igpw68pz1jkc1phvvcgt",
  //     },
  //   },
  //   {
  //     data: {
  //       id: 4,
  //       resName: "Sorbetto - Ice Creams",
  //       cuisine: ["Hazelnut Cold Coffee", "Gelato Ice Cream"],
  //       avgRating: "5.0",
  //       rupees: 270000,
  //       devtime: "45",
  //       imgId: "b032659f932078ee6dea8f7c33b792cf",
  //     },
  //   },
  //   {
  //     data: {
  //       id: 5,
  //       resName: "Meghana Foods",
  //       cuisine: ["Biryani", "North Indian", "Asian"],
  //       avgRating: "3.3",
  //       rupees: 40000,
  //       devtime: "36",
  //       imgId: "45630e693c0b7584b790b3ba24de4cc1",
  //     },
  //   },
  // ]);
  //swiggy data = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  const [listOfResturant, setlistOfResturant] = useState(dataObj);

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterResturant = listOfResturant.filter(
              (res) => res.data.avgRating > 4
            );

            setlistOfResturant(filterResturant);
            // return listOfResturant;
            // console.log(listOfResturant);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
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

        {listOfResturant.map((res, index) => (
          <ResturantCard key={index} resData={res} />
        ))}
        {/* {cardCallback(dataObj)} */}
      </div>
    </div>
  );
};
export default Body;


/********************************************
 * 
 * Class Based Component
 * ********************************** */

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // Create state hook/variable
    this.state = {
      count: 0,
      count1: 1,
    };
    // console.log(this.props.name + " Child Constructor");
  }

  componentDidMount() {
    // console.log(this.props.name + " child componentDidMount called");
  }
  render() {
    // console.log(this.props.name + " Child Render");

    const { name, location } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <h2>Count1: {count1}</h2>
        <button
          onClick={() => {
            //NEVER UPDATE THE STATE VARIBLE DIRECTLY
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            });
          }}
        >
          Count Increment
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: akshay@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;




