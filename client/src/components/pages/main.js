import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "../sidebar";
import Header from "./Header/header";

class main extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="main_box">
          <SideBar />
          <div className="imsisidebar">
          </div>

          <div className="main_White_Space"></div>

          <div className="showing_lost_pet_box">
            {/* 완성될 사이드 바 옆의 박스 */}
            <div className="showing_lost_pet">
              <div className="showing_lost_pet_header">
                <div className="showing_lost_pet_header_information">
                  {/* 이름 성별 나이 종류 */} 이름 성별 나이 종류
                </div>
                <div className="showing_lost_pet_header_location"></div>
                <div className="showing_lost_pet_header_location_info">
                  {/* 지역명, 잃어버린 날짜 */} 지역명 잃어버린 날짜 두개
                </div>
              </div>
              <div className="showing_lost_pet_body">
                {/* 잃어버린 강아지 이미지 */} 강아지 이미지
                <img></img>
              </div>
              <div className="showing_lost_pet_describe">
                <div className="showing_lost_pet_describe_contents">
                  {/* 강아지 설명 */} 강아지 특징 설명
                </div>
                <div className="showing_lost_pet_describe_tag">
                  {/* 지역태그 */} 지역 태그 구현
                </div>
              </div>
            </div>
            <div className="showing_lost_pet_comment">
<<<<<<< HEAD
              {/* 댓글창 */} comment 구현
=======
                {/* 댓글창 */} comment 구현
                <input></input>
>>>>>>> c59499a9f63b9c46e5cb928b1f55885d2a9a28e8
            </div>
            <div className="pagenation">pagenation 구현</div>
          </div>

          <div className="main_White_Space"></div>
        </div>
      </>
    );
  }
}

export default main;
