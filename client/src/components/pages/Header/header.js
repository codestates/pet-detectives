import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
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
                <Link to={"/contents"}>
                  <div className="header_box">반려동물 등록</div>
                </Link>

                <Link to={"/main"}>
                  <div className="header_box">Main Page</div>
                </Link>
                <Link to={"/my_page"}>
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
