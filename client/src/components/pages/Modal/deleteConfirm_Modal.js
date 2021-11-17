import React, { Component } from "react";
import "./deleteConfirmModal.css";

class DeleteConfirmModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickConsole = () => {
    const idx = this.props.idx;
  };

  render() {
    const { isDeleteLostPetsModalOpen, close, idx, deleteLostpet } = this.props;
    return (
      <>
        {isDeleteLostPetsModalOpen ? (
          <div className="modal" onClick={close}>
            <div className="deleteConfirmModal">
              <div
                className="deleteConfirmModal_box"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="deleteConfirmModal_box_describe">
                  <h1>삭제하시겠습니까?</h1>
                  <br />
                  {/* &nbsp;  */}
                  &nbsp;삭제 시, pet detectives 에서 등록된 해당 게시물은
                  삭제됩니다.
                  <br />
                  &nbsp;삭제된 정보는 다시 복구할 수 없습니다.
                </div>
                <div className="deleteConfirmModal_box_choicebox">
                  <div
                    className="deleteConfirmModal_box_choicebox_yes"
                    onClick={() => {
                      deleteLostpet(idx); close();}}
                      
                    // onClick={this.onClickConsole}
                  >
                    네
                  </div>
                  <div
                    className="deleteConfirmModal_box_choicebox_no"
                    onClick={close}
                  >
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
      </>
    );
  }
}

export default DeleteConfirmModal;
