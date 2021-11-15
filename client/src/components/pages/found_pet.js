import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header/header";
import SideBar from "../sidebar";
import Tag from "./Tag/tag";

class found_pet extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="main_box">
          <SideBar />
          <div className="imsisidebar"></div>
          <div className="main_White_Space"></div>

          <div className="showing_lost_pet_box">
            {/* 완성될 사이드 바 옆의 박스 */}
            <div className="showing_lost_pet">
              <div className="showing_lost_pet_header">
                <div className="showing_lost_pet_header_information">
                  <div className="showing_lost_pet_header_information_row">
                    <div className="showing_lost_pet_header_information_box_menu">이름</div>
                    <div className="showing_lost_pet_header_information_box">

                    </div>
                    <div className="showing_lost_pet_header_information_box_menu">성별</div>
                    <div className="showing_lost_pet_header_information_box">

                    </div>
                  </div>
                  <div className="showing_lost_pet_header_information_row">
                  <div className="showing_lost_pet_header_information_box_menu">나이</div>
                  <div className="showing_lost_pet_header_information_box">

                  </div>
                  <div className="showing_lost_pet_header_information_box_menu">종류</div>
                  <div className="showing_lost_pet_header_information_box">

                  </div>
                  </div>
                </div>
                <div className="showing_lost_pet_header_location">
                  <Link to={"/map"}>
                    <div
                    className="showing_lost_pet_header_location_btn">
                      실종
                      map
                    </div>
                  </Link>
                </div>
                <div className="showing_lost_pet_header_location_info">
                  <div className="showing_lost_pet_header_location_info_row">
                  </div>
                  <div className="showing_lost_pet_header_location_info_row">
                  </div>
                </div>
              </div>
              <div className="showing_lost_pet_body">
                {/* 잃어버린 강아지 이미지 */} 펫 이미지
                <img></img>
              </div>
              <div className="showing_lost_pet_describe">
                <div className="showing_lost_pet_describe_contents">
                  {/* 강아지 설명 */} 피드 내용
                </div>
                  <div className="showing_lost_pet_describe_tag_box">
                    <Tag></Tag>
                    <Tag></Tag>
                  </div>
              </div>
            </div>
            <div className="showing_lost_pet_comment">{/* 댓글창 */} 댓글</div>
          </div>
          <div className="infinite_scroll">
            {/* 무한 스크롤 구현 위한 공간 */}
            <div className="arrow_image_box">
              <img className="upArrow_image" src="image/upArrow.png"></img>
            </div>
            <div className="arrow_image_box_space"> 이미지 좋은거 찾아보기</div>
            <div className="arrow_image_box">
              <img className="downArrow_image" src="image/downArrow.png"></img>
            </div>
          </div>
          <div className="main_White_Space"></div>
        </div>
      </>
    );
  }
}

export default found_pet;
