import React, { Component } from "react";
import "../commentModal.css"

class UserComment extends Component {

  render() {
    const { comment } = this.props;
    return (
      <>
          <div className="user_comment">{comment.content}</div>
      </>
    )
  }
}

export default UserComment