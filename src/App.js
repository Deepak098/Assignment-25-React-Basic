import React, { Component } from 'react';

class counter extends Component {
  state = { 
     Age : 78
   }
  render() { 
    return (<div>

      <h1>Hi, This is a React App</h1>
      <p>Your Name is Som And Your Age Is <span>{this.state.Age}</span></p>

      <br></br>
      <h1>Skills</h1>
      <li>sleeping </li>
      <li>writting codes</li><br></br>
      <button>Makemeolder</button><button>greet</button>

      </div>
      
      );
  }
}
 
export default counter;