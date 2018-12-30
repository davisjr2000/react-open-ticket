import React, { Component } from 'react';
import teachers from '../../data/teachers';
import TeacherList from './teacher_list'
import SelectedTeacher from './selected_teacher';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeacher: teachers[0],
      teachers
    };
  }

  selectTeacher = (index) => {
    this.setState({ selectedTeacher: teachers[index]})
  }

  render(){
    return(
      <div className="flex">
        <TeacherList teachers={this.state.teachers} selectTeacher={this.selectTeacher} selectedTeacher={this.state.selectedTeacher}/>
        <SelectedTeacher teacher={this.state.selectedTeacher} />
      </div>
      )
  }
}

export default App;
