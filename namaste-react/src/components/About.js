// import User from "./User";
import UserClass from "./UserClass";
//Destrucring the React.Component()
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount called");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about-us  p-4">
        <h1>About</h1>
        <h2>This is Namaste React Web series</h2>
        <div>
          loggedIn User:
          <UserContext.Consumer>
            {
              /* {(data) => {
              console.log(data);
            }} */

              ({ loggedInUser }) => (
                <span className="text-xl font-bold">{loggedInUser}</span>
              )
            }
          </UserContext.Consumer>
        </div>
        {/* <User name={"Akshay saini(Functional Component)"} location={"Mumbai"} /> */}
        <UserClass name={"First  (Class Component)"} location={"Dehradun"} />
        {/* <UserClass name={"Scond  (Class Component)"} location={"Dehradun"} /> */}
      </div>
    );
  }
}
// class About extends React.Component {
//   constructor(props) {
//     super(props);
//   }
// }

// const About = () => {
//   return (
//     <div className="about-us">
//       <h1>About</h1>
//       <h2>This is Namaste React Web series</h2>

//       <User name={"Akshay saini(Functional Component)"} location={"Mumbai"} />
//       <UserClass name={"Akshay saini(Class Component)"} location={"Dehradun"} />
//     </div>
//   );
// };

export default About;
