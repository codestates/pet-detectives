import React, { Component } from "react";
import { Link } from "react-router-dom";

class userEdit extends Component {
  render() {
    return (
      <>
        <h1>path='/userEdit'</h1>
        <h3>userEdit</h3>
        <ul>
          <li>
            <Link to={"/my_page"}>my_page</Link>
          </li>
          <li>
            <Link to={"/main"}>main</Link>
          </li>
          <li>
            <Link to={"/map"}>map</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default userEdit;
