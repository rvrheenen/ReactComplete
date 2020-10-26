import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: Math.floor(Math.random() * 30) },
      { name: "John", age: 28 },
      { name: "Fred", age: 25 },
    ],
    showPersons: false,
  };

  switchNameHandler = (newName = "Maxi") => {
    let persons = this.state.persons;
    for (let i = 0; i < persons.length; i++) {
      persons[i].name = this.state.persons[(i + 1) % persons.length].name;
      persons[i].age = Math.floor(Math.random() * 30);
    }
    persons[0].name = newName;
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, index) => {
    let persons = { ...this.state.persons };
    let updatePerson = { ...persons[index] };
    updatePerson.name = event.target.value;
    persons[index] = updatePerson;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: ".5rem",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, i)}
                changed={(event) => this.nameChangedHandler(event, i)}
                key={i}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    return (
      <div className="App">
        <h1> Hi I am a React App </h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, "Bobbie")}>Switch name</button>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>

        {persons}
      </div>
    );
    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Hi, I am a React App!!!!"));
  }
}

export default App;
