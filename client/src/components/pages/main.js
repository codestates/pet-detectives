import React, { Component } from "react";
import { Link } from "react-router-dom";
import CommentModal from "./Modal/comment_modal";
import SideBar from "../sidebar";
import Header from "./Header/header";
import Tag from "./Tag/tag";

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
                  <div className="showing_lost_pet_header_information_row">
                    <div className="showing_lost_pet_header_information_box_menu">이름</div>
                    <div className="showing_lost_pet_header_information_box">

                    </div>
                    <div className="showing_lost_pet_header_information_box_menu">성별</div>
                    <div className="showing_lost_pet_header_information_box">

                    </div>
                  </div>
                  <div className="showing_lost_pet_header_information_row">
                  <div className="showing_lost_pet_header_information_box_menu">나이</div>
                  <div className="showing_lost_pet_header_information_box">

                  </div>
                  <div className="showing_lost_pet_header_information_box_menu">종류</div>
                  <div className="showing_lost_pet_header_information_box">

                  </div>
                  </div>
                </div>
                <div className="showing_lost_pet_header_location">
                  <Link to={"/map"}>
                    <div
                    className="showing_lost_pet_header_location_btn">
                      실종 map
                    </div>
                  </Link>
                </div>
                <div className="showing_lost_pet_header_location_info">
                  <div className="showing_lost_pet_header_location_info_row">

                  </div>
                  <div className="showing_lost_pet_header_location_info_row">

                  </div>
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
                <div className="showing_lost_pet_describe_tag_box">
                  <Tag></Tag>
                  <Tag></Tag>
                </div>
              </div>
            </div>
            <div className="showing_lost_pet_comment">
                <button 
                className="showing_lost_pet_comment_btn"
                onClick={this.openCommentModal}>
                  댓 글
                </button>
            </div>
            <div className="pagination">pagination 구현</div>
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
