import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {};
  onClick = () => {
    const name = this.state.name;
    alert("HI HOW ARE YOU" + name);
  };
  onClick2 = () => {
    const name = this.state.name;
    alert(`Goodbye ${name}`);
  };
  onClickreload = () => {
    this.forceUpdate();
    alert("reload page?");
  };

  onEnterphrase = event => {
    const name = event.target.value;
    this.setState({ name });
  };

  render() {
    const name = this.state.name;
    const src = `http://source.unsplash.com/random/400x200/?ts=${+new Date()};${name}`;
    return (
      <div>
        <button onClick={this.onClick2}> Goodbye</button>
        <p>{name}</p>
        <input onInput={this.onEnterphrase} />
        <img src={src} />
        <button onClick={this.onClick}>Hello</button>
        <p />
        <button onClick={this.onClickreload}>Reload</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
