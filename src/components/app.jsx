import React, { Component } from 'react';
import teachers from '../../data/teachers';
import TeacherList from './teacher_list'

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
      <div>
        <TeacherList teachers={this.state.teachers}/>
      </div>
      )
  }
}

export default App;
