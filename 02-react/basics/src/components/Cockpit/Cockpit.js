import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    const assignedclasses = [];
    let btnClass = classes.Button;

    if(props.showPersons){
        btnClass = [classes.Button , classes.Red].join(' ');
    }
    if(props.persons.length <= 2){
      assignedclasses.push( classes.red );  // classes = ['red']
    }
    if(props.persons.length <=1 ){
      assignedclasses.push( classes.bold );
    }
    
    return(
        <Aux>
            <h1>Hi i'm react app</h1> 
            <p className= {assignedclasses.join(' ')}>this is really working</p> 
            <button 
                className = {btnClass}
                onClick = {props.clicked} >Switch name</button>
        </Aux>
    );
}

export default cockpit;