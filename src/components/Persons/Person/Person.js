import React, { Component } from 'react';
import './Person.css';
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    render = () => {
        console.log('[Person.js] rendering....')
        return (
            <AuthContext.Consumer>
                {(context) => {
                    context.authenticated ?
                    <div className="person">
                        <p onClick={this.props.click}>I`m {this.props.name} and I`m {this.props.age} years old !</p>
                        <p>{this.props.children}</p>
                        <input type="text" onChange={this.props.changed} value={this.props.name} />
                    </div>
                    :
                    <p>You`re not authenticated</p>
                }}
            </AuthContext.Consumer>

        )
    }

}

export default Person;