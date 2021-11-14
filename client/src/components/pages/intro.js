import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./Modal/login_modal";
import SignUpModal from "./Modal/signup_modal";

class intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginModalOpen: false,
      isSignUpModalOpen: false,
      isIntro: true,
    };
  }

  openLoginModal = () => {
    if (this.state.isSignUpModalOpen) return;
    this.setState({ isLoginModalOpen: true });
    console.log("login", this.state.isSignUpModalOpen);
  };

  closeLoginModal = () => {
    this.setState({ isLoginModalOpen: false });
  };

  openSignUpModal = () => {
    this.setState({ isSignUpModalOpen: true });
    console.log("singup", this.state.isSignUpModalOpen);
  };

  closeSignUpModal = () => {
    this.setState({ isSignUpModalOpen: false });
  };

  render() {
    return (
      <>
        <div className="box">
          <ul>
            <div className="intro_box">pet image</div>
            <div className="intro_box">찾은 동물 수</div>
          </ul>
          <ul>
            <div className="intro_box">프로젝트 설명 문구</div>
            <div className="intro_box">
              <div className="intro_btn_box">
                <button className="intro_btn" onClick={this.openLoginModal}>
                  Log-In
                </button>
              </div>
            </div>
          </ul>
        </div>
        <LoginModal
          isLoginOpen={this.state.isLoginModalOpen}
          close={this.closeLoginModal}
        />
        <SignUpModal
          isSignUpModalOpen={this.state.isSignUpModalOpen}
          close={this.closeSignUpModal}
        />
      </>
    );
  }
}

export default intro;
