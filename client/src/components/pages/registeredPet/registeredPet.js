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
    let region = "서울";
    if (lostpet.pet_lost_region % 18 === 2) {
      region = "부산";
    }
    if (lostpet.pet_lost_region % 18 === 3) {
      region = "대구";
    }
    if (lostpet.pet_lost_region % 18 === 4) {
      region = "인천";
    }
    if (lostpet.pet_lost_region % 18 === 5) {
      region = "광주";
    }
    if (lostpet.pet_lost_region % 18 === 6) {
      region = "대전";
    }
    if (lostpet.pet_lost_region % 18 === 7) {
      region = "울산";
    }
    if (lostpet.pet_lost_region % 18 === 8) {
      region = "세종";
    }
    if (lostpet.pet_lost_region % 18 === 9) {
      region = "경기";
    }
    if (lostpet.pet_lost_region % 18 === 10) {
      region = "강원";
    }
    if (lostpet.pet_lost_region % 18 === 11) {
      region = "충북";
    }
    if (lostpet.pet_lost_region % 18 === 12) {
      region = "충남";
    }
    if (lostpet.pet_lost_region % 18 === 13) {
      region = "전북";
    }
    if (lostpet.pet_lost_region % 18 === 14) {
      region = "전남";
    }
    if (lostpet.pet_lost_region % 18 === 15) {
      region = "경북";
    }
    if (lostpet.pet_lost_region % 18 === 16) {
      region = "경남";
    }
    if (lostpet.pet_lost_region % 18 === 17) {
      region = "제주";
    }
    return (
      <>
        <div className="mypage_middleSpace_myRegisteredInfo">
          <div className="mypage_lost_pet_info_high">
            <div className="mypage_pet_name">이름 : </div>
            <div className="mypage_pet_name_value">{lostpet.pet_name}</div>
            <div className="mypage_pet_lost_day">잃어버린 날짜 : </div>
            <div className="mypage_pet_lost_day_value"></div>
            <div className="mypage_pet_age">나이 : </div>
            <div className="mypage_pet_age_value">{lostpet.pet_age} </div>
            <div className="mypage_pet_location">지역명 : </div>
            <div className="mypage_pet_location_value">{region}</div>
            <button
              className="mypage_middleSpace_myRegisteredInfo_exit"
              onClick={this.openDeleteLostPetsModal}
              // onClick={deleteLostpet}
            >
              X
            </button>
          </div>
          <div className="mypage_lost_pet_info_low">
            <div className="mypage_pet_image">
              <img
                className="mypage_pet_image_box"
                src={lostpet.image}
              />
            </div>
            <div className="mypage_pet_describe">
              <div className="mypage_pet_describe_text">
                {lostpet.description}
              </div>
              <div className="mypage_pet_describe_tags">
              
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
