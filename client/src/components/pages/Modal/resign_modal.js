import React, { Component } from "react";
import axios from "axios";
import "../../App";
import ResignGoodbyeModal from "./resign_goodbye_modal";

class ResignModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isResignGoodbyeOpen: false,
    };
    this.withdrawalHandler = this.withdrawalHandler.bind(this);
  }

  withdrawalHandler() {
    axios
      .delete("http://localhost:8080/user/withdrawal", {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log("good delete");
        this.setState({ isResignGoodbyeOpen: true });
        localStorage.removeItem("accessToken");
      });
  }

  openResignGoodbyeModal = () => {};

  closeResignGoodbyeModal = () => {
    window.location.href = "/";
  };

  render() {
    const { isResignModalOpen, close } = this.props;
    return (
      <>
        {isResignModalOpen ? (
          <div className="modal" onClick={close}>
            <div className="resignModal">
              <div
                className="resignModal_box"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="resignModal_box_describe">
                  <h1>회원을 탈퇴하시겠습니까?</h1>
                  <br />
                  {/* &nbsp;  */}
                  &nbsp;회원탈퇴 시, pet detectives 에서 작성한 모든 글과 활동
                  내역이 삭제됩니다.
                  <br />
                  &nbsp;삭제된 정보는 다시 복구할 수 없습니다.
                </div>
                <div className="resignModal_box_choicebox">
                  <div
                    className="resignModal_box_choicebox_yes"
                    onClick={this.withdrawalHandler}
                  >
                    네
                  </div>
                  <div className="resignModal_box_choicebox_no" onClick={close}>
                    아니요,
                    <br />
                    조금 더 생각해보겠습니다.
                  </div>
                </div>
              </div>
              <span className="close" onClick={close}>
                &times;
              </span>
            </div>
          </div>
        ) : null}
        <ResignGoodbyeModal
          isResignGoodbyeOpen={this.state.isResignGoodbyeOpen}
          linkToIntro={this.closeResignGoodbyeModal}
        />
      </>
    );
  }
}

export default ResignModal;
