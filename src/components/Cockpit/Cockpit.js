import React from 'react'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
    let btnStyle = {
        backgroundColor: "green",
        width: "100px",
        height: "30px",
        fontSize: "10pt",
        cursor: 'pointer'
    }
    const classes = [];
    const newLocal = props.persons;

    if (props.showPersons) {
        btnStyle.backgroundColor = "red";
    } else {
        btnStyle.backgroundColor = "green";

    }


    if (newLocal.length <= 2) {
        classes.push('red');
    }
    if (newLocal.length <= 1) {
        classes.push('bold');
    }

    return (
        <div className="Cockpit">
            <h1>Hi This is new application</h1>
            <p className={classes.join(' ')}>This an example</p>
            <button style={btnStyle} onClick={props.clicked}>{props.buttonName}</button>

            <AuthContext.Consumer>
                {(context) => {
                    <button onClick={context.login}>Login</button>
                }}
            </AuthContext.Consumer>
        </div>
    );
}

export default cockpit;