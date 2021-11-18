import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResignModal from "./resign_modal";
import axios from "axios";
import "../../App";

// 1. nick네임 중복확인 - DB랑
// 2. currentPassword  - DB랑
// 3. password1 - password2 확인
// 4. password1 유효성 검사
// 5. nick, password axios로 보내서 db안에 변경해주기

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isResignModalOpen: false,
      ediTnicknameCheckText: "",
      editPasswordCheckText: "",
      nickname: "",
      toTokenNickname: "",
      currentPassword: "",
      toTokenPassword: "",
      isCurrentPasswordToTokenPassword: false,
      password1: "",
      password2: "",
      isNicknameChecked: false,
      isCurrentPasswordChecked: false,
      isCurrentNickanmeChecked: false,
      isPasswordChecked: false,
      currentNickname: "",
      isCurrentNickname: true,
      isNicknameNull: false,
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.eduitUserInfo = this.eduitUserInfo.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/user/userinfo", {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.accessTokenData);
        this.setState({
          email: res.data.accessTokenData.email,
          toTokenNickname: res.data.accessTokenData.nickname,
          toTokenPassword: res.data.accessTokenData.password,
        });
      });
  }

  inputHandler(e) {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "nickname") {
      setTimeout(this.isNickChecking, 100);
      setTimeout(this.isCurrentNicknameToTokenNickname, 200);
    } else if (e.target.name === "password2") {
      setTimeout(this.passwordChecking, 100);
    } else if (e.target.name === "password1") {
      setTimeout(this.isPasswordChecking, 200);
    } else if (e.target.name === "currentPassword") {
      setTimeout(this.isCurrentPasswordToTokenPassword, 100);
    }
  }

  eduitUserInfo() {
    axios
      .patch(
        "http://localhost:8080/user/useredit",
        {
          newNickName: this.state.nickname,
        },
        {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("good change Nick");
      })
      .catch((err) => {
        console.log(this.state.nickname);
        console.log(localStorage.getItem("accessToken"));
      });
    console.log("editUserNickname");
    if (this.state.nickname) {
      console.log("nicknameNull", this.state.nickname, true);
    }
    if (this.state.isCurrentNickanmeChecked) {
      console.log("nicknameCurrent", true);
    }
    if (this.state.isCurrentPasswordToTokenPassword) {
      console.log("isCurrentPasswordToTokenPassword", true);
    }
    if (this.state.isPasswordChecked) {
      console.log("isPasswordChecked", true);
    }
  }

  isCurrentNicknameToTokenNickname = () => {
    const { toTokenNickname, nickname } = this.state;
    if (toTokenNickname === nickname) {
      this.setState({
        isCurrentNickanmeChecked: true,
      });
    } else {
      this.setState({
        isCurrentNickanmeChecked: false,
      });
    }
  };

  isCurrentPasswordToTokenPassword = () => {
    const { toTokenPassword, currentPassword } = this.state;
    if (toTokenPassword === currentPassword) {
      this.setState({
        isCurrentPasswordToTokenPassword: true,
        editPasswordCheckText: "",
      });
    } else {
      this.setState({
        isCurrentPasswordToTokenPassword: false,
        editPasswordCheckText: "현재 비밀번호가 틀렸습니다.",
      });
    }
  };

  passwordChecking = () => {
    const { password1, password2 } = this.state;
    if (password1 === password2) {
      this.setState({
        isPasswordChecked: true,
        editPasswordCheckText: "",
      });
    } else {
      this.setState({
        isPasswordChecked: false,
        editPasswordCheckText: "비밀번호가 일치하지 않습니다",
      });
    }
  };

  isPasswordChecking = () => {
    const { password1 } = this.state;
    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordReg.test(password1)) {
      this.setState({
        isPassword: false,
        editPasswordCheckText:
          "숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.",
      });
    } else {
      this.setState({ isPassword: true, editPasswordCheckText: "" });
    }
  };

  isNickChecking = () => {
    const { nickname } = this.state;
    if (nickname.length < 2 || nickname.length > 6) {
      this.setState({
        isNick: false,
        ediTnicknameCheckText: "최소 2글자 최대 6글자",
      });
    } else {
      this.setState({ isNick: true, ediTnicknameCheckText: "" });
    }
  };

  ediTnicknameCheckText = () => {
    const { nickname, isNick } = this.state;
    if (isNick) {
      axios
        .post("http://localhost:8080/auth/nick", {
          nickname: nickname,
        })
        .then((res) => {
          if (res.status === 200 && nickname) {
            this.setState({
              ediTnicknameCheckText: "사용가능한 닉네임 입니다.",
            });
          } else {
            this.setState({
              ediTnicknameCheckText: "최소 2글자 최대 6글자",
              isNick: false,
            });
          }
        })
        .catch((err) => {
          this.setState({
            ediTnicknameCheckText: "사용중인 닉네임 입니다.",
            isNick: false,
          });
        });
    }
  };

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
                <span className="userEditId">아이디 : {this.state.email}</span>
                <input
                  className="userEditNickName"
                  name="nickname"
                  onChange={(e) => this.inputHandler(e)}
                  type="text"
                  value={this.state.nickname}
                  placeholder={`현재 닉네임 : ${this.state.toTokenNickname}`}
                />
                <div class="userEditTry">
                  <span class="userEditTry_span">
                    {this.state.ediTnicknameCheckText}
                  </span>
                  <button
                    className="userEditTry_btn"
                    onClick={this.ediTnicknameCheckText}
                  >
                    중복확인
                  </button>
                </div>
                <input
                  className="userEditPw"
                  name="currentPassword"
                  onChange={(e) => this.inputHandler(e)}
                  type="password"
                  value={this.state.currentPassword}
                  placeholder="현재 비밀번호"
                />
                <input
                  className="userEditPw"
                  name="password1"
                  onChange={(e) => this.inputHandler(e)}
                  type="password"
                  value={this.state.password1}
                  placeholder="비밀번호"
                />
                <input
                  className="userEditPw"
                  name="password2"
                  onChange={(e) => this.inputHandler(e)}
                  type="password"
                  value={this.state.password2}
                  placeholder="비밀번호확인"
                />
                <div class="userEditTry">
                  <span class="userEditTry_span">
                    {this.state.editPasswordCheckText}
                  </span>
                  <div
                    className="userEditTry_btn"
                    onClick={this.ediTnicknameCheckText}
                  ></div>
                </div>
                <div className="userEditBtn_box">
                  <div
                    className="userEditBtn"
                    onClick={() => {
                      this.eduitUserInfo();
                    }}
                  >
                    회원정보 수정하기
                  </div>
                  {/* <button className="loginBtn"> 로그인 </button> */}
                  <button className="userExit" onClick={this.openResignModal}>
                    회원탈퇴
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <ResignModal
          isResignModalOpen={this.state.isResignModalOpen}
          close={this.closeResignModal}
        />
      </>
    );
  }
}

export default UserEdit;
