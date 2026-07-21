import React from "react";

function Blogs(props) {

    const content = (
        <div>
            {
                props.blogs.map((blog) => (
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <h4>{blog.author}</h4>
                        <p>{blog.description}</p>
                    </div>
                ))
            }
        </div>
    );

    return content;
}

export default Blogs;