import React from 'react';
import axios from 'axios';

export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'student': {}
    }
    this.getRandomStudent = this.getRandomStudent.bind(this);
  }

  componentDidMount(){
    this.getRandomStudent()
  }

  getRandomStudent(){
    // TODO: Obtain a random index to get a random student form the array and set to state
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.student.imgurl}></img>
          <h1>{this.state.student.name}</h1>
        </div>
        <button onClick={this.getRandomStudent}>Randomize</button>
      </div>
    )
  }
}