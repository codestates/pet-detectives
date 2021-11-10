import React, { Component } from "react";
import { Link } from "react-router-dom";

class intro extends Component {
  render() {
    return (
      <>
        <h1>path='/'</h1>
        <h3>intro</h3>
        <Link to={"/main"}>Main</Link>
        <div className="intro_project_img">aa</div>
      </>
    );
  }
}

export default intro;
