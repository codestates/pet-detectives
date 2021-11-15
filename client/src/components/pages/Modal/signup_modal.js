import React, { Component } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./signUpModal.css";

// axios.defaults.withCredentials = true;

class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      nickname: "",
      passwordCheck: "",
      passwordChecked: false,
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.singUpRequestHandler = this.singUpRequestHandler.bind(this);
  }

  inputHandler(e) {
    console.log("imInput");
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name !== "name") {
      setTimeout(this.passwordChecking, 100);
    }
  }

  passwordChecking = () => {
    const { password, passwordCheck } = this.state;
    if (password === passwordCheck) {
      this.setState({
        passwordChecked: true,
      });
    } else {
      this.setState({
        passwordChecked: false,
      });
    }
  };

  singUpRequestHandler() {
    const { email, password, nickname, passwordChecked } = this.state;
    if (passwordChecked) {
      axios
        .post("http://localhost:8080/auth/signup", {
          email: email,
          nickname: nickname,
          password: password,
        })
        .then((res) => {
          console.log("im good", res);
          window.location.href = "/main";
        })
        .catch((err) => {
          console.log("ImERRRRAAAARRRRRR", this.state);
        });
    }
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
                  name="nickname"
                  onChange={(e) => this.inputHandler(e)}
                  type="text"
                  value={this.state.nickname}
                  placeholder="닉네임"
                />
                <input
                  className="signPw"
                  name="password"
                  onChange={(e) => this.inputHandler(e)}
                  // onChange={(e) => this.passwordChecking(e)}
                  type="password"
                  value={this.state.password}
                  placeholder="비밀번호"
                />
                <input
                  className="signPw"
                  name="passwordCheck"
                  onChange={(e) => this.inputHandler(e)}
                  type="password"
                  value={this.state.passwordCheck}
                  placeholder="비밀번호확인"
                />
                <div class="signTry">
                  <span class="signTry_span">
                    {this.state.passwordChecked ? (
                      <span></span>
                    ) : (
                      <span>비밀번호가 일치하지 않습니다. </span>
                    )}
                  </span>
                </div>

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
