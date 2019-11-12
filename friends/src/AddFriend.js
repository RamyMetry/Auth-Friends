import React,{useState} from "react"
import api from "./utils/api"

function AddFriend(props){
    console.log(props)
    const[addFriend, setAddFriend]=useState({
        name:"",
        age:"",
        email:"",
    })

    const handleChange=(e)=>{
        setAddFriend({
            ...addFriend,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        api()
        .post("/api/friends", addFriend)
        .then(res=>{
            localStorage.setItem("data",JSON.stringify(res.data))
            props.history.push("/friends")
        })
        .catch(
            err=>console.log(err)
        )
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={addFriend.name} onChange={handleChange}/>
            <input type="number" name="age" value={addFriend.age} onChange={handleChange}/>
            <input type="email" name="email" value={addFriend.email} onChange={handleChange}/>
            <button type="submit">Add Friend</button>
        </form>
    )
}
export default AddFriend;