import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log("[app.js] inside constructor");
  
    this.state = {
      persons: [
        {id: 'qwewq',name: "Manu", age: 29},
        {id: 'qweq',name: "Max", age: 32},
        {id: 'wqewq',name: "Micahel", age: 12}
      ],
      otherState: "some other value",
      showPersons: false
    };

  }

  componentWillMount(){
    console.log("[App.js] inside component will mount");
  };

  componentDidMount(){
    console.log("[App.js] inside component did mount");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[Update App.js] inside should component update", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log("[Update App.js] inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate(){
    console.log("[Update App.js] inside componentDidupdate");
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
    console.log("[app.js] inside render");
    let person = null;
    
    if(this.state.showPersons) {
      person = <Persons 
          persons= {this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler}/>;      
    }

    const assignedclasses = []
    if(this.state.persons.length <= 2){
      assignedclasses.push( classes.red );  // classes = ['red']
    }
    if(this.state.persons.length <=1 ){
      assignedclasses.push( classes.bold );
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonsHandler} />
          {person}
        </div>
    );
    // return React.createElement('div', {className : 'App'}, React.createElement( 'h1',null ,'hi, im react app'))
  }
}

export default App;
