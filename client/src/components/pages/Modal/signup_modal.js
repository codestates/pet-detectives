import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./signUpModal.css";

class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      nickName: "",
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.singUpRequestHandler = this.singUpRequestHandler.bind(this);
  }

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  singUpRequestHandler() {
    const { userId, password, nickName } = this.state;

    axios
      .post("http://localhost:8080/auth/signup", {
        email: this.state.email,
        nickname: this.state.nickName,
        password: this.state.password,
      })
      .then((res) => {
        console.log("im good", res);
        console.log("im good", this.state);
      })
      .catch((err) => {
        console.log("ImERRRRAAAARRRRRR");
        console.log("ImERRRRAAAARRRRRR", this.state);
      });
  }
  render() {
    const { isSignUpModalOpen, close } = this.props;
    return (
      <>
        {isSignUpModalOpen ? (
          <div className="modal" onClick={close}>
            <div className="SignUpModal" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={close}>
                &times;
              </span>

              <div className="modalContents" onClick={() => isSignUpModalOpen}>
                <input
                  className="singId"
                  name="email"
                  onChange={(e) => this.inputHandler(e)}
                  type="text"
                  value={this.state.email}
                  placeholder="아이디(이메일)"
                />
                <div class="signTry">
                  <span class="signTry_span">중복된 아이디 입니다.</span>
                  <button className="signTry_btn">중복확인</button>
                </div>
                <input
                  className="signNickName"
                  name="nickName"
                  onChange={(e) => this.inputHandler(e)}
                  type="text"
                  value={this.state.nickName}
                  placeholder="닉네임"
                />
                <input
                  className="signPw"
                  name="password"
                  onChange={(e) => this.inputHandler(e)}
                  type="password"
                  value={this.state.password}
                  placeholder="비밀번호"
                />
                <input
                  className="signPw"
                  type="password"
                  placeholder="비밀번호확인"
                />
                <button className="signBtn" onClick={this.singUpRequestHandler}>
                  회원가입
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default SignUpModal;
