import React, {Component} from 'react'; 
import classes from './Person.css'

class Person extends Component{
    // (this.props) => {
    //     const style = {
    //         '@media (min-width: 500px)' : {
    //             width: '450px'
    //         }
    //     };
    // }
    constructor(props){
        super(props);
        console.log("[Person.js] inside constructor");
    
    }
    
    componentWillMount(){
        console.log("[Person.js] inside component will mount");
    };
    
    componentDidMount(){
        console.log("[Person.js] inside component did mount");
    }
    
    render() {
        console.log("[Person.js] inside render");        
            return(
                <div className={classes.Person} 
                // style={style}
                >
                    <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old.</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed}  value={this.props.name}/>
                </div>
            )
    }
}; 

export default Person ;