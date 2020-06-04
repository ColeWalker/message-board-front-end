import React,{useState, useEffect} from 'react';
import axios from 'axios';
import qs from 'qs';
import {useHistory} from 'react-router-dom'

const CreatePost = () => {
    const [title, setTitle ] = useState();
    const [body, setBody] = useState();
    const history = useHistory();
    const submitPost = (event) => {
        event.preventDefault();
        if(localStorage.getItem('token')){
            (async ()=>{
                const response = await axios({
                    method:'post',
                    url: "http://localhost:3049/post/create-post",
                    headers:{
                        'Authorization': `jwt ${localStorage.getItem('token')}`
                    },
                    data: qs.stringify({
                        title,
                        body
                    })
                })
                //redirect to res.data.slug, push info about post to route
                history.push('/post/' + response.data.slug,
                {
                    title: response.data.title,
                    body:response.data.body,
                    creatorName: response.data.creatorName,
                    createdAt: response.data.createdAt,
                    updatedAt: response.data.updatedAt
                });
            })()
        }
    }

    return (
        <form
            onSubmit={submitPost}
        >
            <label htmlFor="post-title-input" >Title</label>
            <input 
                id="post-title-input" 
                type="text" 
                onChange={value=> setTitle(value.target.value)}
            />
            <label htmlFor="post-body-input">Body</label>
            <textarea 
                id="post-body-input" 
                onChange={value => setBody(value.target.value)} 
            />
            <button type="submit" >
                Create Post
            </button>
        </form>
    );
}

export default CreatePost;
