import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";
import Followers from "./components/Followers";
import User from "./components/User";
import SearchForm from "./components/SeachForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      followers: [],
      search: {},
    };
  }

  componentDidMount() {
    console.log("CDM");
    axios
      .get("https://api.github.com/users/XavierTwitty")
      .then((res) => {
        console.log(res);
        this.setState({
          ...this.state,
          currentUser: res.data,
        });
      })
      .catch((err) => console.log(err));

    axios
      .get("https://api.github.com/users/XavierTwitty/followers")
      .then((res) => {
        console.log("followers", res);
        this.setState({
          ...this.state,
          followers: res.data,
        });
      });
  }

  componentDidUpdate() {
    console.log("CDU");
  }

  render() {
    return (
      <div className="App">
        <h1> {`Hello ${this.state.currentUser.name}`} </h1>
        <User handleUser={this.state.currentUser} />
        <h2>Followers</h2>
        {this.state.followers.map((foll) => {
          return <Followers handleFollow={foll} />;
        })}
        <SearchForm />
      </div>
    );
  }
}

export default App;
