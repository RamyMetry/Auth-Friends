import React,{useState, useEffect} from "react"
import api from "./utils/api"


function Friend(props){
    const[friend,setFriend]=useState({})
    const {id} = props.match.params;
    useEffect(()=>{
        api().get(`/api/friends/${id}`)
        .then(res=>{
            console.log(res.data)
            setFriend(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])
    return(
        <div>
            
            <h2>{friend.name}</h2>
            <h2>{friend.age}</h2>
            <h2>{friend.email}</h2>
        </div>
    )
}

export default Friend