import React, { Component } from "react";
import { Route } from "react-router-dom";
import intro from "./pages/intro";
import main from "./pages/main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={intro} />
        <Route exact path="/main" component={main} />
      </div>
    );
  }
}

export default App;
