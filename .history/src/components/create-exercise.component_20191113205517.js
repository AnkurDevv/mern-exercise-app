import React, { Component } from 'react';

export default class CreateExercise extends Component {

  // STEP 1 in creating a component: Add a constructor
  constructor(props) {
    // In JS you need to always start by calling super() when working with a sub-class
    super(props);

    // Making sure that all the this inside methods are refereing to class. 
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // all the variables that you want to create/use in class goes here
    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }

  }

  // A react lifecycle method 
  //This one is called right before the component is displayed   
  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test user'
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }


  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }


  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }


  onChangeDate(e) {
    this.setState({
      date: Date
    });
  }

  onSubmit(e) {
    // stop the default HTML form submission behaviour
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);
    // TAKE THE USER BACK TO THE HOME-PAGE
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                // this.state.users => array of users that will come from our mongoDb database
                // function (user) => for each user in users 
                // rtn an option based on 
                // key which is a user
                // value which is a user > user(the actual text)
                this.state.users.map(function (user) {
                  return <option
                    key={user}
                    value={user}>{user}
                  </option>;
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.description}
              // Make sure you call the onChange method to be called anytime this is changed
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            {/* <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div> */}
          </div>

          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
