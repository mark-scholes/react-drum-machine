import React, { Component } from "react";

class ButtonBuilder extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleClick = (e) => {
    const text = e.target.id;
    const id = e.target.id.toUpperCase();
    const currentItem = this.props.drums.filter(
      (sound) => sound.id === id.toLowerCase()
    );
    const displayText = currentItem[0].text;
    document.getElementById(id).play();
    document.getElementById("display").innerText = displayText;
  };

  handleKeyDown = (e) => {
    const key = e.key.toUpperCase();
    const arrayOfKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    if (arrayOfKeys.includes(key)) {
      const currentItem = this.props.drums.filter(
        (sound) => sound.id === key.toLowerCase()
      );
      const displayText = currentItem[0].text;
      document.getElementById(key).play();
      document.getElementById("display").innerText = displayText;
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const links = this.props.drums.map((link) => {
      return (
        <li key={link.id}>
          <div
            className="drum-pad"
            onClick={this.handleClick}
            id={link.id}
            name={link.text}
          >
            <audio
              id={link.id.toUpperCase()}
              src={link.audioLink}
              className="clip"
            ></audio>
            {link.id.toUpperCase()}
          </div>
        </li>
      );
    });

    return <div id="drum_buttons">{links}</div>;
  }
}
export default ButtonBuilder;
