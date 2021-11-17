import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.useSuperCookie = this.useSuperCookie.bind(this);
  }

  useSuperCookie() {
    axios.post();
    console.log("hi");
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
            <div className="tag">
              {/* 태그검색창 */}
              <input
                className="tag_search"
                type="text"
                placeholder="태그 검색"
              />
              <button className="tag_button">검색</button>
            </div>

            <div className="connection">
              {/* 버튼모음 */}
              <div className="header_box_main">
                <Link to={"/found_pet"}>
                  <div className="header_box">찾은 반려동물 목록</div>
                </Link>
                <Link to={"/contents"}>
                  <div className="header_box">반려동물 등록</div>
                </Link>
                <Link to={"/main"}>
                  <div className="header_box">Main Page</div>
                </Link>
                <Link to={"/my_page"} onClick={this.useSuperCookie}>
                  <div className="header_box">My page</div>
                </Link>
                <Link to={"/"}>
                  <div className="header_box">LogOut</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
