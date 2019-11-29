import React, { Component } from 'react';

export default class CreateExercise extends Component {

  // STEP 1: Add a constructor
  constructor(props) {
    // In JS you need to always call super() when working with a sub-class
    super(props);

  }

  render() {
    return (
      <div>
        <p>You are on the create exercise Component !</p>
      </div>
    )
  }
}
