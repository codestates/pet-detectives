import React, { Component } from "react";
import "../../App";

class ResignGoodbyeModal extends Component {
  render() {
    const { isResignGoodbyeOpen, linkToIntro } = this.props;
    return (
      <>
        {isResignGoodbyeOpen ? (
          <div className="modal">
            <div className="resignModal">
              <div className="resignModal_box">
                <div className="resignModal_box_describe">
                  <h1>이용해주셔서 감사합니다!</h1>
                  <br />
                  {/* &nbsp;  */}
                  <p> &nbsp; 언제든 돌아오실 날을 기다리겠습니다.</p>
                </div>
                <div className="resignGoodbyeModal_box_choicebox">
                  <div
                    className="resignGoodbyeModal_box_choicebox_yes"
                    onClick={linkToIntro}
                  >
                    확인
                  </div>
                </div>
              </div>
              <span className="close" onClick={linkToIntro}>
                &times;
              </span>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default ResignGoodbyeModal;
