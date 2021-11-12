import React, { Component } from "react";
import { Link } from "react-router-dom";
import CommentModal from "./Modal/comment_modal";
import SideBar from "../sidebar";
import Header from "./Header/header";

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentModalOpen : false
    }
  }

  openCommentModal = () => {
    this.setState({ isCommentModalOpen : true });
  };

  closeCommentModal = () => {
    this.setState({ isCommentModalOpen : false });
  };



  render() {
    return (
      <>
        <Header />

        <div className="main_box">
          <SideBar />

          <div className="showing_lost_pet_box">
            {/* 완성될 사이드 바 옆의 박스 */}
            <div className="showing_lost_pet">
              <div className="showing_lost_pet_header">
                <div className="showing_lost_pet_header_information">
                  {/* 이름 성별 나이 종류 */} 이름 성별 나이 종류
                </div>
                <div className="showing_lost_pet_header_location">
                  <Link to={"/map"}><button>실종 map</button></Link>
                </div>
                <div className="showing_lost_pet_header_location_info">
                  {/* 지역명, 잃어버린 날짜 */} 지역명 잃어버린 날짜 두개
                </div>
              </div>
              <div className="showing_lost_pet_body">
                {/* 잃어버린 강아지 이미지 */} 강아지 이미지
                <img></img>
              </div>
              <div className="showing_lost_pet_describe">
                <div className="showing_lost_pet_describe_contents">
                  {/* 강아지 설명 */} 강아지 특징 설명
                </div>
                <div className="showing_lost_pet_describe_tag">
                  {/* 지역태그 */} 지역 태그 구현
                </div>
              </div>
            </div>
            <div className="showing_lost_pet_comment">
                {/* 댓글창 */} comment 구현
                <button onClick={this.openCommentModal}>comment</button>
            </div>
            <div className="pagenation">pagenation 구현</div>
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
