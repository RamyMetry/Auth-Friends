import React,{useState} from "react"
import api from "./utils/api"


function AddFriend(props){
    
    const [addFriend,SetAddFriend]=useState({
        name:"",
        age:"",
        email:"",
    })

    const handleChange=(event)=>{
        SetAddFriend({
            ...addFriend,
            [event.target.name]:event.target.value,
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        api().post("/api/friends",addFriend)
        .then(res=>{
            console.log(res)
            localStorage.setItem("data",JSON.stringify(res.data))
            props.history.push("/friends")
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={addFriend.name} onChange={handleChange}/>
            <input type="number" name="age" placeholder="Age" value={addFriend.age} onChange={handleChange}/>
            <input type="email" name="email" placeholder="Email" value={addFriend.email} onChange={handleChange}/>
            <button type="submit">Add Friend</button>
        </form>
    )
}

export default AddFriend;