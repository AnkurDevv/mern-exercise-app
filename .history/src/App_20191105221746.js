import React from 'react';
// import logo from './logo.svg';
// importing the route 
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// NOTICE : must import the components before you can use them 
import Navbar from "./components/navbar.component.js";
import ExcerciseList from "./components/exercise-list.component";
import EditExcercise from "./components/edit-exercises.component";
import CreateExcercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <br />
        <Route path="/" exact component={ExcerciseList} />
        {/* ":id" means bound to change */}
        <Route path="/edit/:id" exact component={EditExcercise} />
        <Route path="/create" exact component={CreateExcercise} />
        <Route path="/user" exact component={CreateUser} />
      </Router>
    </div>
  );
}

export default App;
