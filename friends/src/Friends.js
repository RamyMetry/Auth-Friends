import React,{useState, useEffect} from "react"
import api from "./utils/api"
import {Link} from "react-router-dom"



function Friends(){
    const[friends, setFriends]=useState([])

    useEffect(()=>{
        api()
        .get("/api/friends")
        .then(res=>{
            setFriends(res.data)
            
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <div>
            
            <h1>Friends page</h1>
            {friends.map(friend=>(
                <div key={friend.id}>
                    <Link to={`/friends/${friend.id}`}>{friend.name}</Link> 
                    <li>{friend.email}</li> 
                    <li>{friend.age}</li><br/>
                </div>
            ))}
            <Link to="/friends/addfriend">Add Friend</Link>
        </div>
    )
}
export default Friends;