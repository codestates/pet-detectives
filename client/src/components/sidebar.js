import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
// import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar" style={{ width: 300, minHeight: "100vh" }}>
        <div className="sidebar_box">서울</div>
        <div className="sidebar_box">부산</div>
        <div className="sidebar_box">대구</div>
        <div className="sidebar_box">인천</div>
        <div className="sidebar_box">광주</div>
        <div className="sidebar_box">대전</div>
        <div className="sidebar_box">울산</div>
        <div className="sidebar_box">세종</div>
        <div className="sidebar_box">경기</div>
        <div className="sidebar_box">강원</div>
        <div className="sidebar_box">충복</div>
        <div className="sidebar_box">충남</div>
        <div className="sidebar_box">전복</div>
        <div className="sidebar_box">전남</div>
        <div className="sidebar_box">경북</div>
        <div className="sidebar_box">경남</div>
        <div className="sidebar_box">제주</div>
        <div className="sidebar_box">전체</div>
        <Link to={"/found_pet"}>
          <div className="sidebar_foundpet">Found pet</div>
        </Link>
      </div>
    );
  }
}

export default SideBar;
