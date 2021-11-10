import React, { Component } from "react";
import { Link } from "react-router-dom";

class my_page extends Component {
  render() {
    return (
      <>
        <h1>path='/my_page'</h1>
        <h3>my_page</h3>
        <ul>
          <li>
            <Link to={"/main"}>main</Link>
          </li>
          <li>
            <Link to={"/edit"}>edit</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default my_page;
