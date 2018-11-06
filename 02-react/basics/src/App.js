import React, { Component } from 'react';
import Person from './Person/Person';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: "Manu", age: 29},
      {name: "Max", age: 32},
      {name: "Micahel", age: 12}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 29},
        {name: "Max", age: 32},
        {name: "Micahel", age: 27}
      ]
    }); 
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Manu", age: 29},
        {name: event.target.value, age: 32},
        {name: "Micahel", age: 12}
      ]
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hi i'm react app</h1> 
        <p>this is really working</p> 
        <button style = {style}
         onClick = {() => this.switchNameHandler('Maximilian!')} >Switch name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} >My hobbies : coding.</Person>
        <Person 
        click={this.switchNameHandler.bind(this, 'Max!')} 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}/>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
    return React.createElement('div', {className : 'App'}, React.createElement( 'h1',null ,'hi, im react app'))
  }
}

export default App;
