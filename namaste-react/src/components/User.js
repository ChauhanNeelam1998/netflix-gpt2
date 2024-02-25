import { useState } from "react";

const User = (props) => {
  // const User = ({name,location})

  const [count, setCount] = useState(0);
  //   const [count1, setCount1] = useState(1);

  const { name, location } = props;
  console.log(props);
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      {/* <h2>Count1: {count1}</h2> */}
      <button
        onClick={() => {
          let countNum = count + 1;
          //   let countNum1 = count1 + 1;
          setCount(countNum);
          //   setCount1(countNum1);
        }}
      >
        OnClick
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: akshay@gmail.com</h4>
    </div>
  );
};
export default User;
