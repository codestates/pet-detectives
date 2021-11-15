import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar_category_box">
          <h3>지역별 카테고리</h3>
        </div>
        <div className="sideber_row_box">
          <div className="sideber_column_box">
            <div className="sidebar_district_box">서 울</div>
            <div className="sidebar_district_box">부 산</div>
            <div className="sidebar_district_box">대 구</div>
            <div className="sidebar_district_box">인 천</div>
            <div className="sidebar_district_box">광 주</div>
            <div className="sidebar_district_box">대 전</div>
            <div className="sidebar_district_box">울 산</div>
            <div className="sidebar_district_box">세 종</div>
            <div className="sidebar_district_box">경 기</div>
          </div>
          <div className="sideber_column_box">
            <div className="sidebar_district_box">강 원</div>
            <div className="sidebar_district_box">충 북</div>
            <div className="sidebar_district_box">충 남</div>
            <div className="sidebar_district_box">전 북</div>
            <div className="sidebar_district_box">전 남</div>
            <div className="sidebar_district_box">경 북</div>
            <div className="sidebar_district_box">경 남</div>
            <div className="sidebar_district_box">제 주</div>
            <div className="sidebar_district_box">전 체</div>
          </div>
        </div>
      
      </div>
      
    );
  }
}

export default SideBar;
