import React, { Component } from "react";
import { Route } from "react-router-dom";
import intro from "./pages/intro";
import main from "./pages/main";
import userEdit from "./pages/userEdit";
import contents from "./pages/contents";
import my_page from "./pages/my_page";
import found_pet from "./pages/found_pet";
import map from "./pages/map";
import Header from "./pages/Header/header";
import "./css/app.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={intro} />
        <Route exact path="/main" component={main} />
        <Route exact path="/userEdit" component={userEdit} />
        <Route exact path="/contents" component={contents} />
        <Route exact path="/my_page" component={my_page} />
        <Route exact path="/found_pet" component={found_pet} />
        <Route exact path="/map" component={map} />
      </div>
    );
  }
}

export default App;