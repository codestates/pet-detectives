import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CommentModal from "./Modal/comment_modal";
import MainSideBar from "./Sidebar/mainsidebar";
import Header from "./Header/header";
import LostPet from "./MainLostPet/LostPet"
import { useRef } from "react";

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentModalOpen : false,
      currnetUrl: window.location.href.query,
    }
  }

  // 모달관련
  openCommentModal = () => {
    this.setState({ isCommentModalOpen : true });
    console.log(this.state.currnetUrl)
  };
  closeCommentModal = () => {
    this.setState({ isCommentModalOpen: false });
  };
 // 모달관련

  upToArrow = React.createRef()
  scrollToTop = (event) => {
    this.upToArrow.current.scrollTo(0, 0);
  }
  
  async getPet() {
    // 서버에 GET /pet 로 요청?
    
    // await axios.get('http://localhost:8080/pet',{
    //   // headers: { authorization: `token ${this.props.accessToken}`}
    // }).then((res) => {
    //   console.log('token으로 image받고 상태 change? :',this.state)
    // })
  }


  render() {
    


    return (
      <>
        <Header />
        <div className="main_box">
          <MainSideBar />
          <div className="showing_lost_pet_box"
          ref={this.upToArrow}>
            <LostPet 
            openCommentModal={this.openCommentModal}/>
            <LostPet 
            openCommentModal={this.openCommentModal}/>
            <LostPet 
            openCommentModal={this.openCommentModal}/>
            <LostPet 
            openCommentModal={this.openCommentModal}/>
            <LostPet 
            openCommentModal={this.openCommentModal}/>
            <LostPet 
            openCommentModal={this.openCommentModal}/>

            {/* <div className="pagination">pagination 구현</div>
            <div className="footer_space"></div> */}
          </div>
          <div className="up_to_scroll">
            <div className="scroll_image_box">
              <div className="scroll_image_minibox_space">맨위로</div>
              <div className="scroll_image_minibox">
                <img className="backtotopArrow_image"
                onClick={this.scrollToTop} src="image/backtotop.png"></img>
              </div>
            </div>
          </div>
        </div>
        <CommentModal
          isCommentModalOpen={this.state.isCommentModalOpen}
          close={this.closeCommentModal}
        />
      </>
    );
  }
}

export default main;
