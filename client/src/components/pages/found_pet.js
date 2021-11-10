import React, { Component } from "react";
import { Link } from "react-router-dom";

class found_pet extends Component {
  render() {
    return (
      <>
        <h1>path='/found_pet'</h1>
        <h3>found_pet</h3>
        <Link to={"/main"}>main</Link>
      </>
    );
  }
}

export default found_pet;
