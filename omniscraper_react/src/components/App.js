import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;

render(<App />, document.getElementById("app"));
