import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";
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

// const dataObj = {
//   resName: "Meghana Foods",
//   cuisine: ["Biryani", "North Indian", "Asian"],
//   avgRating: "3.3",
//   rupees: 40000,
//   devtime: "36",
//   imgId: "45630e693c0b7584b790b3ba24de4cc1",
// };

// const cardCallback = (res) => {
//   const output = [];
//   for (let i = 0; i < res.length; i++) {
//     output.push(<ResturantCard resData={res[i]} />);
//   }
//   return output;
// };

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //Make an API call and send username and password
    data = {
      name: "Akshay Shaini",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      {/*//default value*/}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        {/* //Akshay Shaini */}
        <div className="app">
          <UserContext.Provider value={{ loggedInUser: "Elon" }}>
            <Header />
            {/* //Elon */}
          </UserContext.Provider>
          {/*if path '/' = <Body /> */} {/*if path '/about' = <About/> */}{" "}
          {/*if path '/contact' = <Contact/> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

/*******************************************************
 *  Create Router Configuration at root level using createBrowserRouter
 * ********************************************/
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
// root1.render(<AppLayout />);
root1.render(<RouterProvider router={appRouter} />);
