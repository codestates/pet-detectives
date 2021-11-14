import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./commentModal.css"

class CommentModal extends Component {
  render() {
    const { isCommentModalOpen, close } = this.props;
    return (
      <>
        {isCommentModalOpen ? (
          <div 
            className="comment_modalbackground"
            onClick={close}>
            <div 
              className="commentModal"
              onClick={(e) => e.stopPropagation()}>
              <div className="commentModal_box">
                <div 
                  className="commentModal_box_contentsbar"
                  onClick={isCommentModalOpen}>
                    댓글 내용
                </div>
                <div className="commentModal_box_inputbar">
                    <div className="commentModal_box_comment_input">
                      <textarea
                        className="commentModal_box_comment_input_textarea"
                        placeholder="내용을 입력해주세요."
                        rows="5"
                        cols="40"
                      >
                      </textarea>
                    </div>
                    <div className="commentModal_box_choicebox_push">
                      <div className="commentModal_box_choicebox_push_btn">
                      확인
                      </div>
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
    )
  }
}

export default CommentModal