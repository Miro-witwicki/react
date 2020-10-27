import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import AuthContext from '../context/auth-context'

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] Constructor")
    this.state = {
      persons: [
        { id: 1, name: "Miro", age: "29" },
        { id: 2, name: "John", age: "30" },
        { id: 3, name: "Mary", age: "28" }
      ],
      showPersons: false,
      buttonName: "Show",
      authenticated: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.ks] getDerivedStateFromProps", props)
    return state;
  }

  componentDidMount() {
    console.log('[App.js] Component did mount')
  }

  loginHandler = () => {
    console.log("login handler !!!")
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
    this.setState({ persons: persons });
  }

  render() {
    console.log("[App.js] render")

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedhandler} />

    }

    return (
      <div className="person">
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          } }>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            buttonName={this.state.buttonName} />
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
