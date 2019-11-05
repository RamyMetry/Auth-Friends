import React from 'react';
import './App.css';
import {Link, Route} from "react-router-dom"
import Login from "./LoginPage"
import Friends from "./Friends"
import Friend from "./Friend"
import AddFriend from "./AddFriends"

function App() {
  
  return (
    
    <div className="App">
      <nav>
        <Link to="/login">Log In</Link>
      </nav>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/friends" component={Friends}/>
      <Route exact path="/friends/:id" component={Friend}/>
      <Route exact path="/add-friends" component={AddFriend}/>
      
    </div>
  );
}

export default App;
