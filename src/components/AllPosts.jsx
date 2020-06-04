import React, {useState, useEffect} from 'react';
import Post from './Post';
import axios from 'axios';
import './allpost.scss';

const AllPosts = () => {
    const [posts, setPosts] = useState([]);

    const retrieveAllPosts = async () =>{
        let retrievedPosts = [];
        try{
            const res = await axios({
                method: "get",
                url: "http://localhost:3049/post/get-posts",
            });
            retrievedPosts = res.data.posts;
        }
        catch(err){
            console.error(err)
        }
        return retrievedPosts;
    }

    useEffect(()=>{
        (async ()=>{
            setPosts(await retrieveAllPosts());
        })()
    },[])

    return (
        <section
            className="all-post-wrapper main-container"
        >
            {posts.length>0 && posts.map((post)=>{
                return(
                    <React.Fragment
                        key={post.slug}
                    >
                        <Post
                            post={post}
                        />
                    </React.Fragment>
                )
            })}
        </section>
    );
}

export default AllPosts;
