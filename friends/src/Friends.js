import React,{useState, useEffect} from "react"
import api from "./utils/api"

function Friends(){
    const[friens,setFriends]=useState({})

    useEffect(()=>{
        api()
        .get("/api/friends")
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <div>
            <h1>Friends page</h1>
        </div>
    )
}

export default Friends;