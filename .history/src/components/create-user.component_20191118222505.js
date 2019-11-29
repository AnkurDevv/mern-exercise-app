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

  render() {
    return (
      <div>
        <p>You are on the create Users Component !</p>
      </div>
    )
  }
}
