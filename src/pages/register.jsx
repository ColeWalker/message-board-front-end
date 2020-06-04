import React, {useState} from 'react'
import axios from 'axios'
import qs from 'qs'
import './register.css'

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const submitFunction = (event) =>{
        event.preventDefault();
        axios({
            method:"post",
            url: 'http://localhost:3049/register',
            data: qs.stringify({
                username,
                password
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            }
        }).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.error(err) 
        })
    }

    return (
        <>
           <form
            
            className="register-wrapper main-container"
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
                Create Account
            </button>
            </form> 
        </>
    )
}
