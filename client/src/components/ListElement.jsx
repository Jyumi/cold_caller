import React from 'react';
import axios from 'axios';

export default class ListElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      updateName: false,
      studentId: 0,
      studentName: this.props.student.name
    }
    this.updateStudent = this.updateStudent.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this)
  }

  updateStudent(id){
    // TODO: request to update a student's name
    axios.put(`/api/students/${id}`, {
      newName: this.state.studentName
    })
      .then(() => {
        this.props.getStudents()
      })
      .catch((err) => {
        console.error(err)
      })
  }

  clickHandler(id){
    this.setState({
      updateName: true,
      studentId: id
    })
  }

  changeHandler(e){
    this.setState({
      studentName: e.target.value
    });
  }

  submitHandler(e){
    e.preventDefault();
    this.setState({
      updateName: false,
    }, () => {
      this.updateStudent(this.state.studentId)
    })
  }

  render() {
    return (
      this.state.updateName ? 
        <span>
          <input onChange={this.changeHandler}></input>
          <button onClick={this.submitHandler}>Change Name</button>
          <img src={this.props.student.imgurl}></img>
        </span> :
        <span>
          <div onClick={() => this.clickHandler(this.props.student.id)}>{this.props.student.name}</div>
          <img src={this.props.student.imgurl}></img>
        </span>
    )
  }
}