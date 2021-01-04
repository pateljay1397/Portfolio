import React, { Component } from "react";
import "./App.css";
import Introduction from "./components/introduction";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="colorlib-main">
          <Introduction></Introduction>
        </div>
      </div>
    );
  }
}

export default App;
