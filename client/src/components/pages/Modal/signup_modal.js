import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./signUpModal.css";

class SignUpModal extends Component {
  render() {
    const { isSignUpModalOpen, close } = this.props;
    return (
      <>
        {isSignUpModalOpen ? (
          <div className="modal">
            <div onClick={close}>
              <div className="SignUpModal">
                <span className="close" onClick={close}>
                  &times;
                </span>
                <div className="modalContents" onClick={isSignUpModalOpen}>
                  <input className="singId" placeholder="아이디" />
                  <div class="signTry">
                    <span class="signTry_span">중복된 아이디 입니다.</span>
                    <button className="signTry_btn">중복확인</button>
                  </div>
                  <input className="signNickName" placeholder="닉네임" />
                  <input className="signPw" placeholder="비밀번호" />
                  <input className="signPw" placeholder="비밀번호확인" />
                  <Link className="signBtn" to="/main">
                    회원가입
                    {/* <button className="loginBtn"> 로그인 </button> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default SignUpModal;
