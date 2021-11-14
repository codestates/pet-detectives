import React, { Component } from "react";
import "./resignModal.css";

class ResignModal extends Component {
  render() {      
  const { isResignModalOpen , close} = this.props;
  return (        
    <>                               
      {isResignModalOpen ? (
        <div className="modal">
          <div onClick={close}>
            <div className="resignModal">
              <div className="resignModal_box">
                <div 
                  className="resignModal_box_describe"
                  onClick={isResignModalOpen}>
                    회원을 탈퇴하시겠습니까?
                </div>
                <div className="resignModal_box_choicebox">
                    <div className="resignModal_box_choicebox_yes">
                      네
                    </div>
                    <div className="resignModal_box_choicebox_no">
                      아니요
                    </div>
                </div>
              </div>
              <span className="close" onClick={close}>
                 &times;
              </span>
            </div>

          </div>
        </div>) : null}
     </>
  )

  }
}

export default  ResignModal