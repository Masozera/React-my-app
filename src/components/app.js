import React from 'react';
import './styles/stylesheet.css';

class Vic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ken the Ninja',count:0}; // Defining as an object and assign to this.state 
   
  }

  handleClick(){
    this.setState({count: this.state.count+1});
  }
  

  
  render() {
    const name = "Hello Victor";  // This javascript wc is written outside the return
    return (
    	<div>
    	  <h1>Hello, {this.state.name}!</h1>
        <h1>Hello, {this.state.count}!</h1>
    	  {/* Change the state for the onClick event */}
        <button onClick={() => {this.setState({name:'Master Wooly'})}}>Master Wooly</button>
        
        {/* Change the state for the onClick event */}
        <button onClick={() => {this.setState({name:'Ken the Ninja'})}}>Ken the Ninja</button>
       <button  onClick={()=> {this.handleClick()}}>+</button>
        <div>{name}</div>
      </div>
    );
  }
}

export default Vic;




//With the arrow function you learned in ES6 Study III, 
//you can run specific code whenever an event happens with the code: 
//eventName={() => { code }}. Since arrow functions are JavaScript, 
//don't forget to put { } brackets around the code.


//State is created using an object in the constructor. 
//The starting value of the state is set to that object. 
//For the other parts of the code like constructor(props) and super(props);, 
//just remember for now that they are standard and are almost always written the same way.



// With the code this.setState({propertyName: valueToUpdate}), 
// the value of state for the specified property changes. 
// This means values can be displayed with this.state.name can also be changed. 
// To change the name displayed when a button is clicked, 
// we'll put setState inside method for the onClick event, as shown below.

//With an event, you can run some specific code whenever some specific event happens

// Define the state, display the state and update the state

//Objects are used to manage multiple values with properties. eg
// const users = {name:'Victro', age:14};


// Define a handleClick method to handle states.
// handleClick(name){ note=> the name paremetr is for the name passesd as an argument
//   this.setState({name:name});
// }

// render() {
//   return (
//     <div>
//       <h1>Hello, {this.state.name}!</h1>
//       {/* Change the onClick event so that it calls the handleClick method */}
//       <button onClick={() => {this.handleClick('Master Wooly')}}>Master Wooly</button>
      
//       {/* Change the onClick event so that it calls the handleClick method */}
//       <button onClick={() => {this.handleClick('Ken the Ninja')}}>Ken the Ninja</button>
      
//     </div>
//   );
// }