import React from "react";
import BlogPost from "./BlogPost";
import BookData from "../BookData";

function BlogList () {

    const newBooks = BookData.map((books, index) => {
        return <BlogPost 
            key={books.index}
            title={books.title}
            subTitle={books.subTitle}
            author={books.author}
            bookDate={books.date}
        />
    })
    return (
        <div>
            {newBooks}
            <BlogPost />
        </div>
    )
}

export default BlogList