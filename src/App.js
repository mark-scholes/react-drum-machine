import React, { Component } from "react";
import AudioLinks from "./component/data";
import ButtonBuilder from "./component/buttonBuilder";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drums: AudioLinks
    };
  }

  render() {
    return (
      <div id="drum-machine">
        <p id="display"></p>
        <div id="container">
          <ul>
            <ButtonBuilder drums={this.state.drums} />
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
