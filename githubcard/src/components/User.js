import React from "react";

class User extends React.Component {
  render() {
    const {
      name,
      avatar_url,
      followers,
      following,
      location,
      bio,
    } = this.props.handleUser;
    return (
      <>
        <h1> placeHolder </h1>
        <p> name : {name}</p>
        <img src={avatar_url} />
        <p> follower:{followers} </p>
        <p> following: {following} </p>
        <p> following: {following} </p>
        <p> location: {location} </p>
        <p> bio: {bio} </p>
      </>
    );
  }
}

export default User;
