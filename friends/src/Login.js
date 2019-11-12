import React,{useState} from "react";
import api from "./utils/api"

function Login(props){
    const [error,setError]=useState()
    const [login,setLogin]=useState({
        username:"",
        password:"",
    })

    const handleChange= (e) =>{
        setLogin({
            ...login,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        api()
        .post("/api/login", login)
        .then(res=>{
            console.log(res)
            localStorage.setItem("token", res.data.payload)
            props.history.push("/friends")
        })
        .catch(err=>{
            setError(err)
            console.log(error)
        })

    }

    return(
        <form onSubmit={handleSubmit}>
            <h3> User Login</h3>
            <input type="text" name="username" value={login.username} onChange={handleChange}/>
            <input type="password" name="password" value={login.password} onChange={handleChange}/>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;