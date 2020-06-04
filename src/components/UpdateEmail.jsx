import React, {useState} from 'react'
import qs from 'qs'
import axios from 'axios'

export default function UpdateEmail({
    modifyEmailAddress,
    isLoggedIn,
    ...props
}) {
    const [emailAddress, setEmailAddress] = useState();
    const updateEmail = (event) => {
        event.preventDefault();
        if(isLoggedIn){
            (async ()=>{
                const response = await axios({
                    method:'post',
                    url: "http://localhost:3049/update-email",
                    headers:{
                        'Authorization': `jwt ${localStorage.getItem('token')}`
                    },
                    data: qs.stringify({
                        emailAddress
                    })
                })
                modifyEmailAddress(emailAddress);
            })()
        }
    }

    return (
        <>
            <form
                onSubmit={updateEmail}
            >
                <label 
                    htmlFor="email-update-input"
                >
                    New Email Address
                </label>
                <input 
                    type="email" 
                    id="email-update-input"
                    onChange={value => setEmailAddress(value.target.value)} 
                />
                <button
                    type="submit"
                >
                    Update Email
                </button>
            </form>
        </>
    )
}
