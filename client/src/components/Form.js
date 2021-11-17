// src/js/components/Form.js

import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
// import uuidv1 from "uuid";
import { addArticle } from "../redux/actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => dispatch(addArticle(article)),
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      email: "ao@cookie.com",
      password: "coding12!",
      token: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log("Clicked!!");
    event.preventDefault();
    const { title, token } = this.state;
    axios
      .post("http://localhost:8080/auth/signin", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        this.setState({ token: res.data.accessToken });
      })
      .catch((err) => {
        console.log("imERA");
      });

    // const id = uuidv1();
    this.props.addArticle({ title, token });
    this.setState({
      title: "",
    });
  }

  render() {
    const { title, token } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
