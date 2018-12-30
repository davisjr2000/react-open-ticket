import React, { Component } from 'react';

class Teacher extends Component {

  handleClick = () => {
    this.props.selectTeacher(this.props.index);
  }
  render(){
    return(
    <div onClick={this.handleClick} className="teacher-profile selected col-xs-6" className={`teacher-profile col-xs-6 ${this.props.selected ? ' active' : ''}`}>
      <img src={this.props.imageUrl} className="teacher-image"/>
      <h3>{this.props.name}</h3>
    </div>
    )
  }
}

export default Teacher;
