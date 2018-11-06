import React, { Component } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';
import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 'qwewq',name: "Manu", age: 29},
      {id: 'qweq',name: "Max", age: 32},
      {id: 'wqewq',name: "Micahel", age: 12}
    ],
    otherState: "some other value",
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id ===id);

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value; // with the updated name

    const persons = [...this.state.persons];  //copy of the array
    persons[personIndex] = person;  //updated one element

    this.setState({ persons: persons});
  }

  deletePersonHandler = (personIndex)  => {
    // const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState ({showPersons : !doesShow});
  }

  render() {    
    let person = null;
    let btnClass = '';
    
    if(this.state.showPersons) {
      person = (<div>
          {this.state.persons.map( (person, index) => { 
          return <Person 
            click= {() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id} 
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
          </div>
        );
      
      btnClass = classes.Red;
    }

    let assignedclasses = []
    if(this.state.persons.length <= 2){
      assignedclasses.push( classes.red );  // classes = ['red']
    }
    if(this.state.persons.length <=1 ){
      assignedclasses.push( classes.bold );
    }

    return (
        <div className={classes.App}>
          <h1>Hi i'm react app</h1> 
          <p className= {assignedclasses.join(' ')}>this is really working</p> 
          <button 
            className = {btnClass}
            onClick = {this.togglePersonsHandler} >Switch name</button>
          {person}
        </div>
    );
    return React.createElement('div', {className : 'App'}, React.createElement( 'h1',null ,'hi, im react app'))
  }
}

export default App;
