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
      nicknameChecked: false,
      nicknameCheckText: "",
      passwordCheckText: "",
      signUpCheckText: "빈칸을 작성해 주세요",
      isEmail: false,
      isNick: false,
      isPassword: false,
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.singUpRequestHandler = this.singUpRequestHandler.bind(this);
    this.nickCheckHandler = this.nickCheckHandler.bind(this);
  }

  inputHandler(e) {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name == "passwordCheck") {
      console.log(e.target.name);
      setTimeout(this.passwordChecking, 100);
    } else if (e.target.name == "email") {
      console.log("email?");
      setTimeout(this.isEmailChecking, 100);
    } else if (e.target.name === "nickname") {
      setTimeout(this.isNickChecking, 100);
    } else if (e.target.name === "password") {
      setTimeout(this.isPasswordChecking, 200);
      console.log(this.state.isPassword);
    }
  }

  isPasswordChecking = () => {
    const { password } = this.state;
    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordReg.test(password)) {
      this.setState({
        isPassword: false,
        passwordCheckText:
          "숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.",
      });
    } else {
      this.setState({ isPassword: true, passwordCheckText: "" });
    }
  };

  isNickChecking = () => {
    const { nickname } = this.state;
    if (nickname.length < 2 || nickname.length > 6) {
      this.setState({
        isNick: false,
        nicknameCheckText: "최소 2글자 최대 6글자",
      });
    } else {
      this.setState({ isNick: true, nicknameCheckText: "" });
      console.log("good boy~");
    }
  };

  isEmailChecking = () => {
    const { email } = this.state;
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!emailRegex.test(email)) {
      this.setState({ isEmail: false });
    } else {
      this.setState({ isEmail: true });
    }
  };

  passwordChecking = () => {
    const { password, passwordCheck } = this.state;
    if (password === passwordCheck) {
      this.setState({
        passwordChecked: true,
        passwordCheckText: "",
      });
    } else {
      this.setState({
        passwordChecked: false,
        passwordCheckText: "비밀번호가 일치하지 않습니다",
      });
    }
  };

  nickCheckHandler() {
    const { nickname } = this.state;
    axios
      .post("http://localhost:8080/auth/nick", {
        nickname: nickname,
      })
      .then((res) => {
        if (res.status === 200 && nickname) {
          console.log("ok");
          this.setState({ nicknameCheckText: "사용가능한 닉네임 입니다." });
        } else {
          this.setState({
            nicknameCheckText: "최소 2글자 최대 6글자",
            isNick: false,
          });
        }
        console.log(res.status);
      })
      .catch((err) => {
        this.setState({
          nicknameCheckText: "사용중인 닉네임 입니다.",
          isNick: false,
        });

        console.log("imERa~");
      });
  }

  singUpRequestHandler() {
    const {
      email,
      password,
      nickname,
      passwordChecked,
      isEmail,
      isPassword,
      isNick,
    } = this.state;
    if (passwordChecked && isEmail && isNick) {
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
    } else {
      this.setState({ signUpCheckText: "회원가입에 실패 하였습니다." });
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

                <input
                  className="signNickName"
                  name="nickname"
                  onChange={(e) => this.inputHandler(e)}
                  type="text"
                  value={this.state.nickname}
                  placeholder="닉네임"
                />
                <div class="signTry">
                  <span class="signTry_span">
                    {this.state.nicknameCheckText}{" "}
                  </span>
                  <button
                    className="signTry_btn"
                    onClick={this.nickCheckHandler}
                  >
                    중복확인
                  </button>
                </div>
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
                    <span>{this.state.passwordCheckText} </span>
                  </span>
                </div>

                <div className="canSignUp">{this.state.signUpCheckText}</div>
                <button className="signBtn" onClick={this.singUpRequestHandler}>
                  회원가입
                </button>
                <div></div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default SignUpModal;
