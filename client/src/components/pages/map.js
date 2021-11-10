import React, { Component } from "react";
import { Link } from "react-router-dom";

class map extends Component {
  render() {
    return (
      <>
        <h1>path='/map'</h1>
        <h3>map</h3>
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

export default map;
