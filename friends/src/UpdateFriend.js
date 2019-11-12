import React,{useState} from "react"
import api from "./utils/api"

function UpdateFriend(props){
    console.log(props)
    const[updateFriend, setupdateFriend]=useState({
        name:"",
        age:"",
        email:"",
    })
    const {id}= props.match.params;

    const handleChange=(e)=>{
        setupdateFriend({
            ...updateFriend,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        api()
        .put(`/api/friends/${id}`, updateFriend)
        .then(res=>{
            console.log(res)
            localStorage.setItem("update",JSON.stringify(res.data))
            props.history.push("/friends")
        })
        .catch(
            err=>console.log(err)
        )
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={updateFriend.name} onChange={handleChange}/>
            <input type="number" name="age" value={updateFriend.age} onChange={handleChange}/>
            <input type="email" name="email" value={updateFriend.email} onChange={handleChange}/>
            <button type="submit">Update Friend</button>
        </form>
    )
}
export default UpdateFriend;