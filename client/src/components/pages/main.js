import React, { Component } from "react";
import axios from "axios";
import Header from "./Header/header";
import MainSideBar from "./Sidebar/mainsidebar";
import CommentModal from "./Modal/comment_modal";
import LostPet from "./MainLostPet/LostPet"
import { useRef } from "react";


class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentModalOpen : false,
      currnetUrl: window.location.href.query,
      petinfo : []
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
  
  getPet() {
    axios.get("http://localhost:8080/pet/petinfo", {
    }).then((res) => {
      this.setState({petinfo: res.data.data.slice()})
    })
  }

  componentDidMount() {
    this.getPet()
  }

  render() {
    const regex = /[^0-9]/g;
    return (
      <>
        <Header />
        <div className="main_box">
          <MainSideBar />
          <div className="showing_lost_pet_box"
          ref={this.upToArrow}>
            {this.state.petinfo.map((pet) => 
            window.location.href.slice(-4) === "main" && !pet.is_found ?  <LostPet petinfo={pet} openCommentModal={this.openCommentModal}/> :
            !pet.is_found && pet.pet_lost_region === window.location.search.slice(-2).replace(regex, "") ?
            <LostPet
            petinfo={pet}
            openCommentModal={this.openCommentModal}/> 
            : null
            )}
            {/* <div className="pagination">pagination 구현</div>
            <div className="footer_space"></div> */}
          </div>
          <div className="up_to_scroll">
            <div className="scroll_image_box">
              <div className="scroll_image_minibox_space">맨위로</div>
              <div className="scroll_image_minibox">
                <img className="backtotopArrow_image"
                 src="image/backtotop.png"
                 onClick={this.scrollToTop}></img>
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
