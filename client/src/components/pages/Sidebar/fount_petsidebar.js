import React, { Component } from "react";
import { Link } from "react-router-dom";

class FoundPetSideBar extends Component {
  
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar_category_box">
          <h3>지역별 카테고리</h3>
        </div>
        <div className="sideber_row_box">
          <div className="sideber_column_box">
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=1">
                서 울 
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=2">
                부 산 
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=3">
                대 구 
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=4">
                인천 
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=5">
                광 주
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=6">
                대 전
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=7">
                울 산
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=8">
                세 종
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=9">
                경 기
              </Link>
            </div>
          </div>
          <div className="sideber_column_box">
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=10">
                강 원
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=11">
                충 북
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=12">
                충 남
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=13">
                전 북
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=14">
                전 남
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=15">
                경 북
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=g16">
                경 남
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet/?q=17">
                제 주
              </Link>
            </div>
            <div className="sidebar_district_box">
              <Link 
              className="sidebar_district_Link"
              to="/found_pet">
                전 체
              </Link>
            </div>
          </div>
        </div>
      
      </div>
      
    );
  }
}

export default FoundPetSideBar;
