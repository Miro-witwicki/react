import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    render() {
        console.log("[Persons.js] rendering....")   

        return this.props.persons.map((person, idx) => {
            return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(idx)}
                changed={(event) => this.props.changed(event, person.id)}
                key={person.id} />
        });
    }

}
export default Persons;

