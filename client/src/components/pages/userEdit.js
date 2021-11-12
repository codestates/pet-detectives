import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResignModal from "./Modal/resign_modal";

class userEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isResignModalOpen : false
    };
  }

  openResignModal = () => {
    this.setState({ isResignModalOpen : true });
  };

  closeResignModal = () => {
    this.setState({ isResignModalOpen : false });
  };



  render() {
    return (
      <>
        <div className="userEdit_box">
          <div className="userEdit_box_high">
            <div className="userEdit_box_high_space">

            </div>
            <div className="userEdit_box_high_middle">
              <div className="userEdit_box_high_middle_space">빈칸</div>
              <div className="userEdit_box_high_middle_editbox">
                id <input></input>
              </div>
              <div className="userEdit_box_high_middle_editbox">
                닉네임 <input></input>
              </div>
              <div className="userEdit_box_high_middle_editbox">
                현재 비번 <input type="password"></input>
              </div>
              <div className="userEdit_box_high_middle_editbox">
                새로운 비번 <input type="password"></input>
              </div>
              <div className="userEdit_box_high_middle_editbox">
                비번 확인 <input type="password"></input>
              </div>
              <div className="userEdit_box_high_middle_space">빈칸</div>
            </div>
            <div className="userEdit_box_high_space">
              <div className="userEdit_box_high_space_space">
              </div>
              <div className="userEdit_box_high_space_buttonBox">
                <button>중복확인</button>
              </div>

            </div>
          </div>
          <div className="userEdit_box_low">
            <div className="userEdit_box_low_resign">
              <button onClick={this.openResignModal}>
                회원 탈퇴
              </button>
            </div>
            <div className="userEdit_box_low_reviseButton">
              <button>회원정보 수정하기</button>
            </div>
          </div>
        </div>
        <ResignModal 
          isResignModalOpen={this.state.isResignModalOpen}
          close={this.closeResignModal}
        />
      </>
    );
  }
}

export default userEdit;
