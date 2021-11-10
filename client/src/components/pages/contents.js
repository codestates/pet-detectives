import React, { Component } from "react";
import { Link } from "react-router-dom";

class contents extends Component {
  render() {
    return (
      <>
        <h1>path='/contents'</h1>
        <h3>contents</h3>
        <Link to={"/main"}>main</Link>
      </>
    );
  }
}

export default contents;
