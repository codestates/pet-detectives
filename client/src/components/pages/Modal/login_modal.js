import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./loginModal.css";
import SignUpModal from "./signup_modal";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUpModalOpen: false,
    };
  }

  openSignUpModal = () => {
    console.log("singup!!", this.state.isSignUpModalOpen);
    this.setState({ isSignUpModalOpen: true });
  };

  closeSignUpModal = () => {
    this.setState({ isSignUpModalOpen: false });
  };
  render() {
    let { isLoginOpen, close } = this.props;

    return (
      <>
        {isLoginOpen ? (
          <div className="modal" onClick={close}>
            <div className="loginModal" onClick={(e) => e.stopPropagation()}>

              <span className="close" onClick={close}>
                &times;
              </span>
              <div className="modalContents">
                <input className="loginId" placeholder="아이디" />
                <input className="loginPw" placeholder="비밀번호" />
                <Link className="loginBtn" to="/main">
                  로그인
                </Link>
                <div className="socialBox">
                  <button
                    className="loginModal_signupBtn"
                    onClick={this.openSignUpModal}
                  >
                    회원가입
                  </button>
                  <div className="kakao">
                    <img
                      className="kakaoLogo"
                      src="data:image/png;base64,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"
                    />
                    <div className="kakaoText">카카오 계정으로 신규가입</div>
                  </div>
                  <div className="google">
                    <img
                      className="googleLogo"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMa0_vLo8iP-q1hUHn-7QdD4qdr0OXbMckLg&usqp=CAU"
                    />
                    <div className="googleText">구글 계정으로 신규가입</div>
                  </div>
                </div>
              </div>
              {/* <div className="signup_box">ddd</div> */}
            </div>
          </div>
        ) : null}
        <SignUpModal
          isSignUpModalOpen={this.state.isSignUpModalOpen}
          close={this.closeSignUpModal}
        />
      </>
    );
  }
}

export default LoginModal;
