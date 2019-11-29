import React, { Component } from 'react';

export default class CreateUsers extends Component {

  constructor(props) {
    // In JS you need to always start by calling super() when working with a sub-class
    super(props);

    // Making sure that all the "this" inside methods are refereing to class. 
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
  }

  render() {
    return (
      <div>
        <p>You are on the create Users Component !</p>
      </div>
    )
  }
}
