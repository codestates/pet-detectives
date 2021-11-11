import React, { Component } from "react";
import { Link } from "react-router-dom";

class main extends Component {
  render() {
    return (
      <>
        <h1>path='/main'</h1>
        <h3>main</h3>
        <ul>
          <li>
            <Link to={"/"}>intro</Link>
          </li>
          <li>
            <Link to={"/my_page"}>my_page</Link>
          </li>
          <li>
            <Link to={"/contents"}>contents</Link>
          </li>
          <li>
            <Link to={"/found_pet"}>found_pet</Link>
          </li>
          <li>
            <Link to={"/map"}>map</Link>
          </li>
        </ul>
      </>
    );
  }
}

export default main;
