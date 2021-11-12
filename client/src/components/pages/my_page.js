import React, { Component } from "react";
import { Link } from "react-router-dom";

class my_page extends Component {
  render() {
    return (
      <>
        <div className="mypage_box">
          <div className="mypage_rowSpace">
          </div>
          <div className="mypage_middleSpace">
            <div className="mypage_middleSpace_high">

            </div>

            <div className="mypage_middleSpace_middle">

              <div className="mypage_middleSpace_myRegisteredInfo">
                <div className="mypage_lost_pet_info_high">
                  <div className="mypage_pet_name">
                    이름
                  </div>
                  <div className="mypage_pet_lost_day">
                    잃어버린 날짜
                  </div>
                  <div className="mypage_pet_age">
                    나이
                  </div>
                  <div className="mypage_pet_location">
                    지역명
                  </div>
                  <div className="mypage_pet_info_high_space">
                    <button 
                    className="mypage_middleSpace_myRegisteredInfo_exit"
                    onClick={() => {}}
                    >
                      x
                    </button>
                  </div>
                </div>
                <div className="mypage_lost_pet_info_low">
                  <div className="mypage_pet_image">
                    <image>펫 이미지</image>
                  </div>
                  <div className="mypage_pet_describe">
                    피드내용
                  </div>
                  <div className="mypage_pet_toggle_and_revise">
                    <div>toggle</div>
                    <Link to={"/contents"}><button>수정하기</button></Link>
                  </div>
                </div>
              </div>

            </div>

            <div className="mypage_middleSpace_low">
              <Link to={"/userEdit"}>
                <button className="userEdit_button">회원정보 수정하기</button>
              </Link>
            </div>
          </div>
          <div className="mypage_rowSpace">

          </div>
        </div>
      </>
    );
  }
}

export default my_page;
