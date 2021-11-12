import React, { Component } from "react";
import { Link } from "react-router-dom";

class found_pet extends Component {
  render() {
    return (
      <>
        <div className="main_box">
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
                  {/* 지역명, 잃어버린 날짜 */} 지역명, 잃어버린 날짜
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
                <div className="showing_lost_pet_describe_tag">
                   {/* 지역태그 */} 태그들
                </div>
              </div>
            </div>
            <div className="showing_lost_pet_comment">
                {/* 댓글창 */} 댓글
            </div>
            
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
