import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sideber_row_box">
          <div className="sideber_column_box">
            <div className="sidebar_district_box">서울</div>
            <div className="sidebar_district_box">부산</div>
            <div className="sidebar_district_box">대구</div>
            <div className="sidebar_district_box">인천</div>
            <div className="sidebar_district_box">광주</div>
            <div className="sidebar_district_box">대전</div>
            <div className="sidebar_district_box">울산</div>
            <div className="sidebar_district_box">세종</div>
            <div className="sidebar_district_box">경기</div>
          </div>
          <div className="sideber_column_box">
            <div className="sidebar_district_box">강원</div>
            <div className="sidebar_district_box">충복</div>
            <div className="sidebar_district_box">충남</div>
            <div className="sidebar_district_box">전복</div>
            <div className="sidebar_district_box">전남</div>
            <div className="sidebar_district_box">경북</div>
            <div className="sidebar_district_box">경남</div>
            <div className="sidebar_district_box">제주</div>
            <div className="sidebar_district_box">전체</div>
          </div>
        </div>
      
      </div>
      
    );
  }
}

export default SideBar;
