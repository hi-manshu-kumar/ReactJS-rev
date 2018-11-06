import React, { Component } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';
import './App.css';

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let person = null;
    
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
    );}

    return (
      <div className="App">
        <h1>Hi i'm react app</h1> 
        <p>this is really working</p> 
        <button style = {style}
          onClick = {this.togglePersonsHandler} >Switch name</button>
        {person}
      </div>
    );
    return React.createElement('div', {className : 'App'}, React.createElement( 'h1',null ,'hi, im react app'))
  }
}

export default App;
