import React from 'react';
import axios from 'axios';

export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'name': '',
      'imgurl': ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  changeHandler(e){
    // TODO: change the state according to the input from the client
  }

  handleSubmit(e){
    // TODO: upon submission, there should be two post requests. one to api/students endpoint and one to api/images
    // TODO: add a window alert to notify the client that they added a student
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Student Name: </label>
          <input type="text" name="name" onChange={(e) => this.changeHandler(e)} />
          <label>Image URL: </label>
          <input type="text" name="imgurl" onChange={(e) => this.changeHandler(e)} />
          <button type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>
      </div>
    )
  }
}