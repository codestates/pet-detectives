import React, { Component } from "react";
import { Link } from "react-router-dom";
import loginModal from "./Modal/loginModal";

class intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
    console.log("openModal");
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <Link to={"/main"}>Main</Link>
        <div className="box">
          <ul>
            <div className="intro_box">pet image</div>
            <div className="intro_box">찾은 동물 수</div>
          </ul>
          <ul>
            <div className="intro_box">프로젝트 설명 문구</div>
            <div className="intro_box">
              <div className="intro_btn_box">
                <button className="intro_btn" onClick={this.openModal}>
                  Log-In
                </button>
                <loginModal
                  isOpen={this.state.isModalOpen}
                  close={this.closeModal}
                />
                <button className="intro_btn">회원가입</button>
              </div>
            </div>
          </ul>
        </div>
      </>
    );
  }
}

export default intro;
