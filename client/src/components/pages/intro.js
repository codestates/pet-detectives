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
    this.setState({
      isLoginModalOpen: true,
    });
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
            <div className="intro_box">
              <div>
                <img src="image/pet_detectives_logo.png" />
              </div>
            </div>
            <div className="intro_box">
              <p>
                현재 실종 동물 수 : 52
                <br />
                현재 찾은 동물 수 : 3
              </p>
            </div>
          </ul>
          <ul>
            <div className="intro_box">
              <p className="intro_box_text">
                찾을겁니다. 반드시!
                <br />
                당신의 소중한 반려동물 결코 포기하지 마세요!
                <br />
                저희, 그리고 모두가 도와드립니다.
                <br />
              </p>
            </div>
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
