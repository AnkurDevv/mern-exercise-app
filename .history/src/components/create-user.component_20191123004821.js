import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {

  constructor(props) {
    // In JS you need to always start by calling super() when working with a sub-class
    super(props);

    // Making sure that all the "this" inside methods are refering to class. 
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);

    // all the variables that you want to create/use in class goes here
    this.state = {
      username: '',
      date: new Date(),
      users: []
    };

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  HandleSubmit(e) {
    // stop the default HTML form submission behaviour
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);
    // TAKE THE USER BACK TO THE HOME-PAGE
    // This is obsolete here because user should be able to enter multiple user
    // window.location = '/'; 
    console.log("Congrats you added a user!!");
    // SET USERNAME BACK TO BLANK SO ANOTHER ONE CAN BE ENTERED
    this.setState({
      username: ''
    });

  }

  render() {
    return (
      <div>
        <h3 className="text-center">Create New User</h3>
        <form onSubmit={this.HandleSubmit}>
          <div className="form-group">
            <label>Please Enter The UserName: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.username}
              // Make sure you call the onChange method to be called anytime this is changed
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create New User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
