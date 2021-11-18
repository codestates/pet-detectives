import React, { Component } from "react";
import axios from "axios";
import Header from "./Header/header";
import MainSideBar from "./Sidebar/mainsidebar";
import CommentModal from "./Modal/comment_modal";
import LostPet from "./MainLostPet/LostPet";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentModalOpen: false,
      currnetUrl: window.location.href.query,
      petinfo: [],
      token: "",
      isLoading: true,
    };
  }

  // 모달관련

  isLodingTrue = () => {
    this.setState({ isLoding: true });
    console.log(this.state.isLoding);
  };

  openCommentModal = () => {
    this.setState({ isCommentModalOpen: true });
    console.log(this.state.currnetUrl);
  };
  closeCommentModal = () => {
    this.setState({ isCommentModalOpen: false });
  };
  // 모달관련

  upToArrow = React.createRef();

  scrollToTop = (event) => {
    this.upToArrow.current.scrollTo(0, 0);
  };

  getPet() {
    axios.get("http://localhost:8080/pet/petinfo", {}).then((res) => {
      const regex = /[^0-9]/g;
      this.setState({ petinfo: res.data.data.slice() });
      console.log(window.location.search.slice(-2).replace(regex, ""));
    });
    this.setState({ isLoading: false });
  }
  // componentDidUpdate() {
  componentDidMount() {
    setTimeout(() => this.getPet(), 2000);
  }

  render() {
    const { articles } = this.props;
    const regex = /[^0-9]/g;

    return (
      <>
        {this.state.isLoading ? (
          <div className="jungang">
            <span className="loading">Loading...</span>
          </div>
        ) : (
          <>
            <Header />
            <div className="main_box">
              <MainSideBar />

              <div className="showing_lost_pet_box" ref={this.upToArrow}>
                {this.state.petinfo.map((pet, idx) =>
                  // {console.log("pet.pet_lost_region :",pet.pet_lost_region)
                  // console.log("window.location :",window.location.search.slice(-2).replace(regex, ""))}
                  window.location.href.slice(-4) === "main" && !pet.is_found ? (
                    <LostPet
                      petinfo={pet}
                      openCommentModal={this.openCommentModal}
                    />
                  ) : !pet.is_found &&
                    pet.pet_lost_region ===
                      Number(
                        window.location.search.slice(-2).replace(regex, "")
                      ) ? (
                    <LostPet
                      petinfo={pet}
                      openCommentModal={this.openCommentModal}
                    />
                  ) : null
                )}
                {/* <div className="pagination">pagination 구현</div>
            <div className="footer_space"></div> */}
              </div>
              <div className="up_to_scroll">
                <div className="scroll_image_box">
                  <div className="scroll_image_minibox">
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      onClick={this.scrollToTop}
                      className="scroll_image_minibox_arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
            <CommentModal
              isCommentModalOpen={this.state.isCommentModalOpen}
              close={this.closeCommentModal}
            />
          </>
        )}
      </>
    );
  }
}

Main = connect(mapStateToProps)(Main);

export default Main;
