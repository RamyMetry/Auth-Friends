import React,{useState, useEffect} from "react"
import api from "./utils/api"
import {Link} from "react-router-dom"

function Friend(props){
    const [friend, setFriend]=useState({})
    const {id}= props.match.params;
    
    useEffect(()=>{
        api()
        .get(`/api/friends/${id}`)
        .then(res=>{
            setFriend(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])

    const Delete=(e)=>{
        e.preventDefault()
        api()
        .delete(`/api/friends/${id}`)
        .then(res=>props.history.push('/friends'))
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Friend</h1>
           <h3>{friend.name}</h3>
           <h3>{friend.email}</h3>
           <h3>{friend.age}</h3>
           <Link to={`/friends/updatefriend/${friend.id}`}>Update</Link>
           <button onClick={Delete}>Delete</button>
        </div>
    )
}
export default Friend;