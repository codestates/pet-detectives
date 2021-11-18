import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header/header";
import RegisteredPet from "./registeredPet/registeredPet";
// import lostpetList from "../dummyfile/lostpetinfo";
import UserEdit from "./Modal/userEdit";

class my_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lostpetList: [],
      isUserEditModalOpen: false,
      isLoading: true,
      // isDeleteLostPetsModalOpen: true,
    };
  }

  deleteLostpet = (idx) => {
    let lostpetListdata = this.state.lostpetList;
    lostpetListdata.splice(idx, 1);
    // console.log('wow',idx)
    this.setState({
      lostpetList: lostpetListdata,
    });
    // window.location.replace("/my_page");
  };

  openUserEditModal = () => {
    this.setState({ isUserEditModalOpen: true });
  };

  closeUserEditModal = () => {
    this.setState({ isUserEditModalOpen: false });
  };

  getregisteredPet() {
  
    axios.get("http://localhost:8080/pet/petinfo",
      {},
      {
        headers: {
        token: localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }).then((res) => {
      console.log(res.data)
      this.setState({ lostpetList: res.data.data.slice() })
    })
    setTimeout(
    this.setState({isLoading: false})
    ,10000)
  }

  componentDidMount() {
    setTimeout(() => this.getregisteredPet(),2000)
  }

  render() {
    return (
      <>
      {this.state.isLoading ?
            <div className="jungang">
            <span className="loading">Loading...</span>
            </div>
            :
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
                {this.state.lostpetList.map((lostpet, idx) => {
                  return (
                    <RegisteredPet
                      lostpet={lostpet}
                      idx={idx}
                      deleteLostpet={this.deleteLostpet}
                    />
                  );
                })}
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
          isDeleteLostPetsModalOpen={this.state.isDeleteLostPetsModalOpen}
          close={this.closeUserEditModal}
        />
        {/* <button>COOKIE PUSH TEST</button> */}
        </>
              }
      </>
    );
  }
}

export default my_page;
