import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResignModal from "./resign_modal";
import axios from "axios";
import "./userEdit.css";

// 1. nick네임 중복확인 - DB랑
// 2. currentPassword  - DB랑
// 3. password1 - password2 확인
// 4. password1 유효성 검사
// 5. nick, password axios로 보내서 db안에 변경해주기

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "kimcoding@codestate.com",
      isResignModalOpen: false,
      ediTnicknameCheckText: "",
      editPasswordCheckText: "",
      nickname: "",
      currentPassword: "",
      password1: "",
      password2: "",
      isNicknameChecked: false,
      isCurrentPasswordChecked: false,
      isPasswordChecked: false,
    };
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "nickname") {
      setTimeout(this.isNickChecking, 100);
    } else if (e.target.name === "password2") {
      setTimeout(this.passwordChecking, 100);
    } else if (e.target.name === "password1") {
      setTimeout(this.isPasswordChecking, 200);
    }
  }

  passwordChecking = () => {
    console.log(this.state.isPasswordChecked);
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
      console.log("good boy~");
    }
  };

  ediTnicknameCheckText = () => {
    const { nickname, isNick } = this.state;
    console.log(nickname);
    if (isNick) {
      axios
        .post("http://localhost:8080/auth/nick", {
          nickname: nickname,
        })
        .then((res) => {
          if (res.status === 200 && nickname) {
            console.log("ok");
            this.setState({
              ediTnicknameCheckText: "사용가능한 닉네임 입니다.",
            });
          } else {
            this.setState({
              ediTnicknameCheckText: "최소 2글자 최대 6글자",
              isNick: false,
            });
          }
          console.log(res.status);
        })
        .catch((err) => {
          this.setState({
            ediTnicknameCheckText: "사용중인 닉네임 입니다.",
            isNick: false,
          });
          console.log("imERa~");
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
                <span className="userEditId">
                  아이디 : kimcoding@petdetectives.com
                </span>
                <input
                  className="userEditNickName"
                  name="nickname"
                  onChange={(e) => this.inputHandler(e)}
                  type="text"
                  value={this.state.nickname}
                  placeholder="닉네임"
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
                  <Link className="userEditBtn" to="/my_page">
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
