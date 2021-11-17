import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">{articles.token}</ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
