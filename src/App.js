import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Miro", age: "29" },
      { id: 2, name: "John", age: "30" },
      { id: 3, name: "Mary", age: "28" }

    ],
    showPersons: false,
    buttonName: "Show"
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    this.setState({ buttonName: !doesShow ? "hide" : "show" });

  }

  deletePersonHandler = (personIdx) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIdx, 1);
    this.setState({ persons: persons });
  }

  nameChangedhandler = (event, personIdx) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === personIdx;  
    })
    const newPerson = {
      ...this.state.persons[personIndex]
    }
    newPerson.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = newPerson;
    this.setState({persons:persons});
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, idx) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(person.id)}
              changed={(event) => this.nameChangedhandler(event, person.id)}
              key={person.id} />
          })}
        </div>
      );
    }
    return (
      <div className="person">
        <h1>Hi This is new application</h1>
        <button onClick={this.togglePersonsHandler}>{this.state.buttonName}</button>
        {persons}
      </div>
    );
  }
}

export default App;
