import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./commentModal.css"

class CommentModal extends Component {
  render() {
    const { isCommentModalOpen, close } = this.props;
    return (
      <>
        {isCommentModalOpen ? (
          <div className="comment_modalbackground">
            <div onClick={close}>
              <div className="commentModal">
                <div className="commentModal_box">
                  <div 
                    className="commentModal_box_contentsbar"
                    onClick={isCommentModalOpen}>
                      댓글 내용
                  </div>
                  <div className="commentModal_box_inputbar">
                      <div className="commentModal_box_comment_input">
                        입력 내용
                      </div>
                      <div className="commentModal_box_choicebox_push">
                        댓글 푸쉬
                      </div>
                  </div>
                </div>
                <span className="close" onClick={close}>
                  &times;
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </>
    )
  }
}

export default CommentModal