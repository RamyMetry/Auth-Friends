import React from 'react';
import {Route,Link} from "react-router-dom"
import Login from "./Login"
import Friends from './Friends';
import Friend from "./Friend"
import AddFriend from './AddFriend';
import UpdateFriend from './UpdateFriend';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login}/>
      <Route exact path="/friends" component={Friends}/>
      <Route  path="/friends/:id" component={Friend}/>
      <Route exact path="/friends/addfriend" component={AddFriend}/>
      <Route exact path="/friends/updatefriend/:id" component={UpdateFriend}/>
      
  
    </div>
  );
}

export default App;
