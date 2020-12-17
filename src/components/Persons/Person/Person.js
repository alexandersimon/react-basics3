import './Person.css';
import React from 'react';

const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm from {props.location}.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
} 

export default person;