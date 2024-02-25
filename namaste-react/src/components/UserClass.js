import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // Create state hook/variable
    this.state = {
      count: 0,
      count1: 1,
      userInfo: {
        name: "Default",
        location: "Default",
        avatar_url: "",
      },
    };
    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState({
      userInfo: jsonData,
    });
    // console.log(this.props.name + " child componentDidMount called");
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate will called");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount will called");
  }
  render() {
    // console.log(this.props.name + " Child Render");

    //  { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
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
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: akshay@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
