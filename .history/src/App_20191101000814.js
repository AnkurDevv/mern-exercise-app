import React from 'react';
// import logo from './logo.svg';
// importing the route 
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ExcerciseList from "./components/exercise-list.component";
import EditExcercise from "./components/edit-exercise.component";
import CreateExcercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExcerciseList} />
      <Route path="/edit/:id" exact component={EditExcercise} />
      <Route path="/create" exact component={CreateExcercise} />
      <Route path="/user" exact component={CreateUser} />
    </Router>
  );
}

export default App;
