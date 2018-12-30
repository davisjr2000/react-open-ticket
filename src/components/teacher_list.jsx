import React from 'react';
import Teacher from './teacher';

const TeacherList = (props) => {
  const renderList = () => {
    return props.teachers.map((teacher, index) => {
      return (
        <Teacher
        name={teacher.name}
        imageUrl={teacher.imageUrl}
        index={index}
        specialty={teacher.specialty}
        selected={props.selectedTeacher.name === teacher.name}
        selectTeacher={props.selectTeacher}
        />
        );
    });
  };

  return (
    <div className="teacher-list">
      {renderList()}
     </div>
    )
};

export default TeacherList;
