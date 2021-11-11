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
              <img className="logo" src="image/pet_detectives_logo.png"></img>
            </div>
            <div className="tag">
              {/* 태그검색창 */}
              <input
                className="tag_search" 
                value=""
              />
              <button className="tag_button" >
                태그 검색
              </button>
            </div>
            <div className="connection">
              {/* 버튼모음 */}
              <div><button>반려동물 등록</button></div>
              <div><button>Main page</button></div>
              <div><button>My page</button></div>
              <div><button>LogOut</button></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
