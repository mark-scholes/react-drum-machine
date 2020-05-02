import React, { Component } from "react";

class ButtonBuilder extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleClick = e => {
    const id = e.target.id;
    const text = e.target.name;
    document.getElementById(id).play();
    document.getElementById("display").innerText = text;
  };

  handleKeyDown = e => {
    const key = e.key;
    const arrayOfKeys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
    arrayOfKeys.includes(key) && document.getElementById(key).play();
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const links = this.props.drums.map(link => {
      return (
        <li key={link.id}>
          <audio id={link.id} src={link.audioLink}></audio>
          <button onClick={this.handleClick} id={link.id} name={link.text}>
            {link.text}
          </button>
        </li>
      );
    });

    return <div>{links}</div>;
  }
}
export default ButtonBuilder;
