import React, {useState, useEffect} from 'react';
import UpdateEmail from '../components/UpdateEmail'
import axios from 'axios'

const FindUser = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('token').length > 0
    );
    const [username, setUsername] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    useEffect(()=>{
        if(isLoggedIn){
            (async ()=>{
                const response = await axios({
                    method:'get',
                    url: "http://localhost:3049/findUser",
                    headers:{
                        'Authorization': `jwt ${localStorage.getItem('token')}`
                    }
                })
                setUsername(response.data.username);
                setEmailAddress(response.data.emailAddress);
            })()
        }
    }, [isLoggedIn])

    return (
        <div
            className="main-container"
        >
            {
                (isLoggedIn) ? <div>
                    <p>{username}</p>
                    {emailAddress && <p>{emailAddress}</p>}
                </div> 
                : <div>
                    <p>Please log in</p>
                </div>
            }
            <UpdateEmail
                emailAddress={emailAddress}
                modifyEmailAddress={setEmailAddress}
                isLoggedIn={isLoggedIn}
            />
            
        </div>
    );
}

export default FindUser;
