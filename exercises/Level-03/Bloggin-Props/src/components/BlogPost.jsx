import React from "react";

function BlogPost(props) {
    return (
        <div className="blogposts">
            <h2 className="posts">{props.title}</h2>
            {props.subTitle && <h3 className="posts">{props.subTitle}</h3>}
            <p className="posts formatting">Posted by {props.author} on {props.bookDate}</p>
            <hr></hr>
        </div>
    )
}

export default BlogPost