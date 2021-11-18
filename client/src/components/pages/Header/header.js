import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginHeader: false,
    };
    this.useSuperCookie = this.useSuperCookie.bind(this);
    this.logOutHandler = this.logOutHandler.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("accessToken")) {
      this.setState({ isLoginHeader: true });
    } else {
    }
  }

  useSuperCookie() {
    axios.post();
    console.log("hi");
  }

  logOutHandler() {
    localStorage.removeItem("accessToken");
  }

  render() {
    return (
      <>
        <div className="draw">
          <div className="header">
            <div className="logo_box">
              {/* 로고이미지박스 */}
              <Link to={"/main"}>
                <img className="logo" src="image/pet_detectives_logo.png"></img>
              </Link>
            </div>
            <div className="connection">
              {/* 버튼모음 */}
              <div className="header_box_main">
                <Link to={"/found_pet"}>
                  <div className="header_box">찾은 반려동물 목록</div>
                </Link>
                {this.state.isLoginHeader ? (
                  <Link to={"/contents"}>
                    <div className="header_box">반려동물 등록</div>
                  </Link>
                ) : null}
                <Link to={"/main"}>
                  <div className="header_box">Main Page</div>
                </Link>
                {this.state.isLoginHeader ? (
                  <Link to={"/my_page"} onClick={this.useSuperCookie}>
                    <div className="header_box">My page</div>
                  </Link>
                ) : null}
                {this.state.isLoginHeader ? (
                  <Link to={"/"} onClick={this.logOutHandler}>
                    <div className="header_box">LogOut</div>
                  </Link>
                ) : (
                  <Link to={"/"} onClick={this.logOutHandler}>
                    <div className="header_box">돌아가기</div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
