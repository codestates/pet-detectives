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
                value=""
              />
              <Link to={"/main"}>
                <button className="tag_button" >
                  태그 검색
                </button>
              </Link>
            </div>
            <div className="connection">
              {/* 버튼모음 */}
              <div><Link to={"/contents"}><button>반려동물 등록</button></Link></div>
              <div><Link to={"/main"}><button>Main page</button></Link></div>
              <div><Link to={"/my_page"}><button>My page</button></Link></div>
              <div><Link to={"/"}><button>LogOut</button></Link></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
