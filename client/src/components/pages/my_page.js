import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header/header";
import RegisteredPet from "./registeredPet/registeredPet";

class my_page extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="mypage_box">
          <div className="mypage_rowSpace"></div>
          <div className="mypage_middleSpace">
            <div className="mypage_middleSpace_high"></div>

            <div className="mypage_middleSpace_middle">
              <div className="mypage_middleSpace_myRegisteredInfo_box">

                <RegisteredPet/>
                <RegisteredPet/>

              </div>
            </div>

            <div className="mypage_middleSpace_low">
              <Link to={"/userEdit"}>
                <button className="userEdit_button">회원정보 수정하기</button>
              </Link>
            </div>
          </div>
          <div className="mypage_rowSpace"></div>
        </div>
      </>
    );
  }
}

export default my_page;
