import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResignModal from "./resign_modal";
import "./userEdit.css";

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isResignModalOpen: false,
    };
  }

  openResignModal = () => {
    this.setState({ isResignModalOpen: true });
  };

  closeResignModal = () => {
    this.setState({ isResignModalOpen: false });
  };

  render() {
    const { isUserEditModalOpen, close } = this.props;
    return (
      <>
        {isUserEditModalOpen ? (
          <div className="modal" onClick={close}>
            <div className="userEditModal" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={close}>
                &times;
              </span>
              <div
                className="modalContents"
                onClick={() => isUserEditModalOpen}
              >
                <span className="userEditId">
                  아이디 : kimcoding@petdetectives.com
                </span>
                <input className="userEditNickName" placeholder="닉네임" />
                <div class="userEditTry">
                  <span class="userEditTry_span">중복된 닉네임 입니다.</span>
                  <button className="userEditTry_btn">중복확인</button>
                </div>
                <input className="userEditPw" placeholder="현재 비밀번호" />
                <input className="userEditPw" placeholder="비밀번호" />
                <input className="userEditPw" placeholder="비밀번호확인" />
                <div className="userEditBtn_box">
                  <Link className="userEditBtn" to="/main">
                    회원정보 수정하기
                    {/* <button className="loginBtn"> 로그인 </button> */}
                  </Link>
                  <button className="userExit" onClick={this.openResignModal}>
                    회원탈퇴
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>null</div>
        )}
        <ResignModal
          isResignModalOpen={this.state.isResignModalOpen}
          close={this.closeResignModal}
        />
      </>
    );
  }
}

export default UserEdit;
