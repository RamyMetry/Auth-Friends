import React,{useState, useEffect} from "react"
import api from "./utils/api"
import {Link} from "react-router-dom"

function Friends(props){
    const[friends,setFriends]=useState([])
    
   
    useEffect(()=>{
        api()
        .get("/api/friends")
        .then(res=>{
            console.log(res.data)
            setFriends(res.data);
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <div>
            <Link to="/add-friends">Add Friend</Link>

            
            <h1>Friends List</h1>
            
          {friends.map((friend)=>(
              <div key={friend.id} friend={friend}>
                  <h4>{friend.name}</h4>
                  <h5>{friend.email}</h5>
                  <h5>{friend.age}</h5><br/><br/><br/>
              </div>
          ))}
        </div>
    )
}

export default Friends;