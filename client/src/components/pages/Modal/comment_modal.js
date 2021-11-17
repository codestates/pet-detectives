import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserComment from "./userComment/userComment";
import "./commentModal.css"
import commentList from "../../dummyfile/comments";

class CommentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList : commentList,
      commentContents : "",
    }
  }

handleButtonClick = (event) => {
    const newComment = {};
    newComment.id = this.state.commentList.length+1
    newComment.content = this.state.commentContents
  this.setState({commentList : [newComment, ...this.state.commentList]})
}

handleChangeTxt = (event) => {
  this.setState({commentContents : event.target.value})
  // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
};



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
                   {this.state.commentList.map((comment)=> <UserComment comment={comment}/>)}
                </div>
                <div className="commentModal_box_inputbar">
                    <div className="commentModal_box_comment_input">
                      <textarea
                        className="commentModal_box_comment_input_textarea"
                        onChange={this.handleChangeTxt}
                        placeholder="내용을 입력해주세요."
                        rows="5"
                        cols="40"
                      >
                      </textarea>
                    </div>
                    <div className="commentModal_box_choicebox_push">
                      <div 
                      className="commentModal_box_choicebox_push_btn"
                      onClick={this.handleButtonClick}
                      >
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