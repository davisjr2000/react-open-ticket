import React, { Component } from 'react';

class SelectedTeacher extends Component{
  render(){
    return(
      <div className="selected-teacher">
        <img src={this.props.teacher.imageUrl} className="selected-teacher-image"/>
        <h1>{this.props.teacher.name}</h1>
        <h2>{this.props.teacher.specialty} Teacher</h2>
      </div>
      )
  }
}

export default SelectedTeacher;
