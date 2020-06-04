import React from 'react'
import {useLocation} from 'react-router-dom'
import './detailed-post.scss'
import format from 'date-fns/format'

export default function DetailedPost(props) {
    //grab info from router
    let {state : {title, body, createdAt, updatedAt, creatorName }} = useLocation();
    createdAt = format(new Date(createdAt), "dd MMMM yyyy");
    
    return (
        <article
            className="detailed-post-wrapper main-container"
        >
           <header>
            <h1>{title}</h1>
            <div className="post-info-wrapper">
                <p>By: <span>{creatorName}</span></p>
                <p>{createdAt}</p>
            </div>
           </header>
           <div
            className="detailed-post-body"
           >
            {body}
           </div>
        </article>
    )
}
