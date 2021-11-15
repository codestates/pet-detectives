import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header/header";
import RegisteredPet from "./registeredPet/registeredPet";
import lostpetList from "../dummyfile/lostpetinfo";
import { ScrollButton } from "../scroll/scroll";
import UserEdit from "./Modal/userEdit";

class my_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lostpetList : lostpetList,
      isUserEditModalOpen: false,
    }
  }
//   handleButtonClick = (event) => {
//    const newlostPet = {};
//    newlostPet.id = this.state.commentList.length+1
//    newlostPet.name = this.state.commentContents
//    newlostPet.lostday = this.state.commentContents
//    newlostPet.age = this.state.commentContents
//    newlostPet.location = this.state.commentContents
//   this.setState({lostpetList : [newlostPet, ...this.state.lostpetList]})
// }

deleteLostpet = (idx) => {
  let lostpetListdata = this.state.lostpetList
  lostpetListdata.splice(idx,1)
  // console.log('wow',idx)
  this.setState({lostpetList : lostpetListdata})
}
      
  openUserEditModal = () => {
    this.setState({ isUserEditModalOpen: true });
  };

  closeUserEditModal = () => {
    this.setState({ isUserEditModalOpen: false });
  };

  render() {
    return (
      <>
        <Header />
        <div className="mypage_box">
          <div className="mypage_rowSpace"></div>
          <div className="mypage_middleSpace">
            <div className="mypage_middleSpace_high">
              <h1>My Page</h1>
            </div>

            <div className="mypage_middleSpace_middle">
              <div className="mypage_middleSpace_myRegisteredInfo_box">
              {this.state.lostpetList.map((lostpet, idx)=> {
                return <RegisteredPet 
                lostpet={lostpet} 
                idx={idx}
                deleteLostpet={this.deleteLostpet}
              />})}
              </div>
            </div>

            <div className="mypage_middleSpace_low">
              <button
                className="userEdit_button"
                onClick={this.openUserEditModal}
              >
                회원정보 수정하기
              </button>
            </div>
          </div>
          <div className="mypage_rowSpace"></div>
        </div>
        <UserEdit
          isUserEditModalOpen={this.state.isUserEditModalOpen}
          close={this.closeUserEditModal}
        />
      </>
    );
  }
}

export default my_page;
