import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import intro from "./pages/intro";
import main from "./pages/main";
import userEdit from "./pages/Modal/userEdit";
import contents from "./pages/contents";
import my_page from "./pages/my_page";
import found_pet from "./pages/found_pet";
import map from "./pages/map";

import store from "../redux/store";
import { addArticle } from "../redux/actions";

import "./css/app.css";
import "./css/app2.css";

window.store = store;
window.addArticle = addArticle;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  componentDidMount() {
    if (localStorage.getItem("accessToken")) {
      this.setState({ isLogin: true });
      console.log("true");
    } else {
      console.log("false");
    }
  }
  reduxConsole = () => {
    console.log("hi");
  };

  render() {
    return (
      <>
        {this.state.isLogin ? (
          <div className="App">
            <Route exact path="/" component={intro} />
            <Route exact path="/main" component={main} />
            <Route exact path="/userEdit" component={userEdit} />
            <Route exact path="/contents" component={contents} />
            <Route exact path="/my_page" component={my_page} />
            <Route exact path="/found_pet" component={found_pet} />
            <Route exact path="/map" component={map} />
            <Redirect to="/main" />
          </div>
        ) : (
          <div className="App">
            <Route exact path="/" component={intro} />
            <Route exact path="/main" component={main} />
            <Route exact path="/userEdit" component={userEdit} />
            <Route exact path="/contents" component={contents} />
            <Route exact path="/my_page" component={my_page} />
            <Route exact path="/found_pet" component={found_pet} />
            <Route exact path="/map" component={map} />
          </div>
        )}
      </>
    );
  }
}

export default App;
