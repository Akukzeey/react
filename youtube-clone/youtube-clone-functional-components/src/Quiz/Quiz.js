import React from "react";
import usePosts from "../hooks/usePosts";

const Quiz = () => {
    const posts=usePosts()

  const renderedPosts = posts.map((post) => {
     return <li key={post.id}>{post.title}</li>
  })


return (
    <div>
        <h3>Posts</h3>
        <ul>{renderedPosts}</ul>
    </div>
)

}

export default Quiz