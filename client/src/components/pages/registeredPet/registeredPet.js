import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeleteConfirmModal from "../Modal/deleteConfirm_Modal";

class RegisteredPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleteLostPetsModalOpen: false,
    };
  }
  openDeleteLostPetsModal = () => {
    if (this.state.isDeleteLostPetsModalOpen) return;
    this.setState({
      isDeleteLostPetsModalOpen: true,
    });
  };

  closeDeleteLostPetsModal = () => {
    this.setState({ isDeleteLostPetsModalOpen: false });
  };
  render() {
    const { lostpet, idx, deleteLostpet } = this.props;
    let region = "서울"
    if(lostpet.pet_lost_region % 18 === 2) { region = "부산"}
    if(lostpet.pet_lost_region % 18 === 3) { region = "대구"}
    if(lostpet.pet_lost_region % 18 === 4) { region = "인천"}
    if(lostpet.pet_lost_region % 18 === 5) { region = "광주"}
    if(lostpet.pet_lost_region % 18 === 6) { region = "대전"}
    if(lostpet.pet_lost_region % 18 === 7) { region = "울산"}
    if(lostpet.pet_lost_region % 18 === 8) { region = "세종"}
    if(lostpet.pet_lost_region % 18 === 9) { region = "경기"}
    if(lostpet.pet_lost_region % 18 === 10) { region = "강원"}
    if(lostpet.pet_lost_region % 18 === 11) { region = "충북"}
    if(lostpet.pet_lost_region % 18 === 12) { region = "충남"}
    if(lostpet.pet_lost_region % 18 === 13) { region = "전북"}
    if(lostpet.pet_lost_region % 18 === 14) { region = "전남"}
    if(lostpet.pet_lost_region % 18 === 15) { region = "경북"}
    if(lostpet.pet_lost_region % 18 === 16) { region = "경남"}
    if(lostpet.pet_lost_region % 18 === 17) { region = "제주"}
    return (
      <>
        <div className="mypage_middleSpace_myRegisteredInfo">
          <div className="mypage_lost_pet_info_high">
            <div className="mypage_pet_name">이름 : </div>
            <div className="mypage_pet_name_value">{lostpet.pet_name}</div>
            <div className="mypage_pet_lost_day">잃어버린 날짜 : </div>
            <div className="mypage_pet_lost_day_value">
              {/* {lostpet.pet_lost_date.slice(0,10)} */}
            </div>
            <div className="mypage_pet_age">나이 : </div>
            <div className="mypage_pet_age_value">{lostpet.pet_age} </div>
            <div className="mypage_pet_location">지역명 : </div>
            <div className="mypage_pet_location_value">{region}</div>
            <button
              className="mypage_middleSpace_myRegisteredInfo_exit"
              onClick={this.openDeleteLostPetsModal}
              // onClick={deleteLostpet}
            >X</button>
          </div>
          <div className="mypage_lost_pet_info_low">
            <div className="mypage_pet_image">
              <img
                className="mypage_pet_image_box"
                src="data:image/jpeg;base64,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"
              />{" "}
            </div>
            <div className="mypage_pet_describe">
              <div className="mypage_pet_describe_text">
                강아지를 찾습니다 <br /> 특징으로는 귀엽습니다!
              </div>
              <div className="mypage_pet_describe_tags">
                #귀여움, #흰색, #멍멍멍
              </div>
            </div>
            <div className="mypage_pet_toggle_and_revise">
              <div>강아지를 찾았습니다</div>
              <br />
              <label className="mypage_pet_toggle_switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <DeleteConfirmModal
          isDeleteLostPetsModalOpen={this.state.isDeleteLostPetsModalOpen}
          close={this.closeDeleteLostPetsModal}
          idx={idx}
          deleteLostpet={deleteLostpet}
        />
      </>
    );
  }
}

export default RegisteredPet;
