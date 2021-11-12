import React, { Component } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
// import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar" style={{ width: 300, minHeight: "100vh" }}>
        <div>im Side</div>
      </div>
    );
  }
}

export default SideBar;
