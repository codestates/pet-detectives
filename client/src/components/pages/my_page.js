import React, { Component } from "react";
import { Link } from "react-router-dom";

class my_page extends Component {
  render() {
    return (
      <>
        <h1>path='/my_page'</h1>
        <h3>my_page</h3>
        <Link to={"/main"}>main</Link>
      </>
    );
  }
}

export default my_page;
