import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) =>
  <div>
    {props.students.map((student, index) => {
      return <ListElement key={index} student={student} getStudents={props.getStudents} />
    })}
  </div>


export default List