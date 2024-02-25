import { LOGO_URL } from "../utils/comman";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login";
  console.log("Header Render");
  const [btnNameReact, setBtnNameReact] = useState("LogIn");

  // Context
  const data = useContext(UserContext);
  const { loggedInUser } = data;
  console.log(data);

  //Subscribing to the store using Hook useSelector

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  /*
  - if no dependency array => useEeffect called every time at each render
  - if dependency array is empty => useEeffect called on initial render (justn once)
  - if dependency have  value [btnNameReact] => useEeffect called everytime btnNameReact updated
  */
  useEffect(() => {
    console.log("UseEffect called from header");
  }, [btnNameReact]);

  const onlineStatus = useOnlineStatus();
  return (
    // header in style.css  / / / flex - is tailwind css
    <div className="header flex justify-between bg-pink-100 px-2 shadow-md">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} />
      </div>

      <div className="flex items-center nav-items">
        <ul className="flex m-4">
          <li className="px-2 font-semibold">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-2  font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2  font-semibold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2  font-semibold">
            <Link to="/contact">Contant Us</Link>
          </li>
          <li className="px-2  font-semibold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2  font-semibold">
            <Link to="/cart">Cart ( {cartItems.length} - items)</Link>
          </li>

          <button
            className="login bg-gray-300 px-5 text-sm font-bold rounded-md"
            onClick={() => {
              btnNameReact === "LogIn"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("LogIn");
              // console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-2  font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
