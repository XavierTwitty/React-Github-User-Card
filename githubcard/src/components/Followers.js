import React from "react";

class Followers extends React.Component {
  render() {
    const { login } = this.props.handleFollow;
    return (
      <div>
        <p> {login} </p>
      </div>
    );
  }
}

export default Followers;
