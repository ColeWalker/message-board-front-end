import React from 'react';
import './post.scss'
import {Link, 
    useRouteMatch,
    Switch,
    Route,
    BrowserRouter
} from 'react-router-dom'
import DetailedPost from '../pages/DetailedPost';

const Post = ({
    post: {
        title,
        body,
        slug,
        createdAt,
        updatedAt,
        creatorName,
    },
    ...props}) => {
    
    return (
        <article
            className="post-wrapper"
        >
                <h2>
                    <Link to={{
                        pathname: `/post/${slug}`,
                        state:{
                            title,
                            body,
                            creatorName,
                            createdAt,
                            updatedAt
                        }
                    }}>{title}</Link>
                </h2>
                <p>By: <span>{creatorName}</span></p>
           
        </article>
    );
}

export default Post;
