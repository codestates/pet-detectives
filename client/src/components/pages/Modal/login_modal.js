import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./loginModal.css";
import SignUpModal from "./signup_modal";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUpModalOpen: false,
      email: "",
      password: "",
      loginCheckText: "아이디와 비밀번호를 입력해 주세요.",
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.loginRequestHandler = this.loginRequestHandler.bind(this);
  }

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  loginRequestHandler() {
<<<<<<< HEAD
    const { userId, password } = this.state;

    axios
      .post("http://localhost:8080/auth/signin", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        console.log("good", res.data.accessToken);
        console.log("good", this.state);
        // window.location.href = "/main";
      })
      .catch((err) => {
        console.log("ImERRRRRRRRRR", this.state);
      });
=======
    const { email, password } = this.state;
    if (email && password) {
      axios
        .post("http://localhost:8080/auth/signin", {
          email: this.state.email,
          password: this.state.password,
        })
        .then((res) => {
          console.log("good", res);
          console.log("good", this.state);
          window.location.href = "/main";
        })
        .catch((err) => {
          console.log("ImERRRRRRRRRR", this.state);
        });
    } else {
      this.setState({ loginCheckText: "로그인에 실패 하였습니다." });
    }
>>>>>>> ee5cdfb0bfde35eab31242a1a5f19e13eac65bfc
  }

  hotlink = () => {
    window.location.href = "/main";
  };

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
                <input
                  className="loginId"
                  name="email"
                  onChange={(e) => this.inputHandler(e)}
                  type="text"
                  value={this.state.email}
                  placeholder="아이디(이메일)"
                />
                <input
                  className="loginPw"
                  name="password"
                  onChange={(e) => this.inputHandler(e)}
                  type="password"
                  value={this.state.password}
                  placeholder="비밀번호"
                />
                <button className="loginBtn" onClick={this.loginRequestHandler}>
                  로그인
                </button>

                <div className="socialBox">
                  <button
                    className="loginModal_signupBtn"
                    onClick={this.openSignUpModal}
                  >
                    회원가입
                  </button>
                  <div className="google">
                    <img
                      className="googleLogo"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMa0_vLo8iP-q1hUHn-7QdD4qdr0OXbMckLg&usqp=CAU"
                    />
                    <div className="googleText">구글 계정으로 신규가입</div>
                  </div>
                  <button
                    className="loginModal_signupBtn"
                    onClick={this.hotlink}
                  >
                    비회원 사용해보기
                  </button>
                  <div className="canSignUp">{this.state.loginCheckText}</div>
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
