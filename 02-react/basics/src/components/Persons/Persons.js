import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
    constructor(props){
        super(props);
        console.log("[Persons.js] inside constructor");
    
    }
    
    componentWillMount(){
        console.log("[Persons.js] inside component will mount");
    };
    
    componentDidMount(){
        console.log("[Persons.js] inside component did mount");
    }

    componentWillReceiveProps(nextProps){
        console.log("[Update Person.js] inside component will receive props", nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("[Update Person.js] inside should component update", nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //      nextProps.changed !== this.props.changed ||
    //      nextProps.clicked !== this.props.clicked;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log("[Update Person.js] inside componentWillUpdate", nextProps, nextState);
    }

    componentDidUpdate(){
        console.log("[Update Person.js] inside componentDidupdate");
    }

    render(){
        console.log("[Persons.js] inside render");

        return this.props.persons.map( (person, index) => { 
            return <Person 
              click= {() => this.props.clicked(index)}
              name={person.name}
              position = {index} 
              age={person.age}
              key= {person.id}
              changed={(event) => this.props.changed(event, person.id)}/>
            });
        }
}

export default Persons;
 