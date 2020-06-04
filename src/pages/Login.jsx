import React, {useState} from 'react'
import axios from 'axios'
import qs from 'qs'
import './login.css'

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const submitFunction = (event) =>{
        event.preventDefault();
        axios({
            method:"post",
            url: 'http://localhost:3049/loginUser',
            data: qs.stringify({
                username,
                password
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res)=>{
            localStorage.setItem('token', res.data.token);
        }).catch((err)=>{
            console.error(err) 
        })
    }


    return (
        <>
             <form
            
            className="login-wrapper main-container"
            onSubmit={submitFunction}
           >
            <label htmlFor="username-input">Username</label>
            <input
                type="text"
                id="username-input"
                onChange={value => setUsername(value.target.value)}
            />
            <label htmlFor="password-input">Password</label>
            <input
                type="password"
                id="password-input"
                onChange={value => setPassword(value.target.value)}
            />
            <button
                type="submit"
                
            >
                Login
            </button>
            </form> 
        </>
    )
}
