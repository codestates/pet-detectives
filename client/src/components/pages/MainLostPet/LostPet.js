import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tag from "../Tag/tag";

class LostPet extends Component {
  render() {
    const { openCommentModal, petinfo } = this.props;
    let region = "서울"
    if(petinfo.pet_lost_region % 18 === 2) { region = "부산"}
    if(petinfo.pet_lost_region % 18 === 3) { region = "대구"}
    if(petinfo.pet_lost_region % 18 === 4) { region = "인천"}
    if(petinfo.pet_lost_region % 18 === 5) { region = "광주"}
    if(petinfo.pet_lost_region % 18 === 6) { region = "대전"}
    if(petinfo.pet_lost_region % 18 === 7) { region = "울산"}
    if(petinfo.pet_lost_region % 18 === 8) { region = "세종"}
    if(petinfo.pet_lost_region % 18 === 9) { region = "경기"}
    if(petinfo.pet_lost_region % 18 === 10) { region = "강원"}
    if(petinfo.pet_lost_region % 18 === 11) { region = "충북"}
    if(petinfo.pet_lost_region % 18 === 12) { region = "충남"}
    if(petinfo.pet_lost_region % 18 === 13) { region = "전북"}
    if(petinfo.pet_lost_region % 18 === 14) { region = "전남"}
    if(petinfo.pet_lost_region % 18 === 15) { region = "경북"}
    if(petinfo.pet_lost_region % 18 === 16) { region = "경남"}
    if(petinfo.pet_lost_region % 18 === 17) { region = "제주"}

    return (
      <>
        <div className="showing_lost_pet">
          <div className="showing_lost_pet_space"></div>
          <div className="showing_lost_pet_header">
            <div className="showing_lost_pet_header_information">
              <div className="showing_lost_pet_header_information_row">
                <div className="showing_lost_pet_header_information_box_menu">
                  이름
                </div>
                <div className="showing_lost_pet_header_information_box">
                  {petinfo.pet_name}
                </div>
                <div className="showing_lost_pet_header_information_box_menu">
                  성별
                </div>
                <div className="showing_lost_pet_header_information_box">
                  {petinfo.pet_sex}
                </div>
              </div>
              <div className="showing_lost_pet_header_information_row">
                <div className="showing_lost_pet_header_information_box_menu">
                  나이
                </div>
                <div className="showing_lost_pet_header_information_box">
                  {petinfo.pet_age}  
                </div>
                <div className="showing_lost_pet_header_information_box_menu">
                  종류
                </div>
                <div className="showing_lost_pet_header_information_box">
                  {petinfo.pet_category}
                </div>
              </div>
            </div>
            <div className="showing_lost_pet_header_location">
              <Link 
              to={"/map"}
               className="showing_lost_pet_header_location_btn"> 
                실 종 <br/>map
              </Link>
            </div>
            <div className="showing_lost_pet_header_location_info">
              <div className="showing_lost_pet_header_location_info_row">
                <div className="showing_lost_pet_header_location_info_box_menu">
                  지역명
                </div>
                <div className="showing_lost_pet_header_location_info_box">
                  {region}
                </div>
              </div>
              <div className="showing_lost_pet_header_location_info_row">
                <div className="showing_lost_pet_header_location_info_box_menu">
                  실종 날짜
                </div>
                <div className="showing_lost_pet_header_location_info_box">
                  {petinfo.pet_lost_date.slice(0,10)}
                </div>
              </div>
            </div>
          </div>
          <div className="showing_lost_pet_body">
            <img
            className="showing_lost_pet_body_image"
            src={petinfo.image}
            ></img>
          </div>
          <div className="showing_lost_pet_describe">
            <div className="showing_lost_pet_describe_contents_box">
              <div className="showing_lost_pet_describe_contents">
               {petinfo.description}
              </div>
            </div>
            <div className="showing_lost_pet_describe_tag_box">
              <Tag></Tag>
              <Tag></Tag>
            </div>
          </div>
          <div className="showing_lost_pet_comment">
              <button 
              className="showing_lost_pet_comment_btn"
              onClick={openCommentModal}>
                댓 글 달 기
              </button>
          </div>
        </div>
      </>
    );
  }
}

export default LostPet;
