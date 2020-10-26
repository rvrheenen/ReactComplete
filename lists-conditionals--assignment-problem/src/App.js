import React, { Component } from "react";
import "./App.css";
import CharComponent from "./CharComponent/CharComponent";
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
  state = {
    inputText: "",
  };

  removeLetter = (index) => {
    let str = this.state.inputText;
    str = str.replace(str.substring(index, index + 1), "");
    this.setState({ inputText: str });
  };

  render() {
    let charBoxes = (
      <div>
        {[...this.state.inputText].map((letter, i) => {
          return <CharComponent letter={letter} index={i} removeLetter={this.removeLetter} key="i" />;
        })}
      </div>
    );
    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener which outputs the length of the entered
            text below it (e.g. in a paragraph).
          </li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text
            length (e.g. take 5 as a minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block,
            padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a different letter of the entered text
            (in the initial input field) as a prop.
          </li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input
          type="text"
          value={this.state.inputText}
          onChange={(event) => {
            this.setState({ inputText: event.target.value });
          }}
        />
        <p>{this.state.inputText.length}</p>
        <ValidationComponent inputLength={this.state.inputText.length} />
        {charBoxes}
      </div>
    );
  }
}

export default App;
