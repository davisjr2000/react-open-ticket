import React, { Component } from 'react';
import teachers from '../../data/teachers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeacher: teachers[0],
      teachers
    };
  }

  render(){
    return(
      <h1>HELLO REACT</h1>
      )
  }
}

export default App
