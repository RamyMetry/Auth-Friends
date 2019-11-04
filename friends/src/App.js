import React from 'react';
import './App.css';
import {Link, Route} from "react-router-dom"
import Login from "./LoginPage"
import Friends from "./Friends"

function App() {
  return (
    
    <div className="App">
      <nav>
        <Link to="/login">Log In</Link>
      </nav>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/friends" component={Friends}/>
      
    </div>
  );
}

export default App;
