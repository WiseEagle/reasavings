import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.message} likeCounter={ p.likeCounter}/> );

  return (
    <div className={s.myPostsBlock}>
      <h3>My posts</h3>
      <div className={s.postMessage}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>

          { postsElements }

      </div>
    </div>
  )

}

export default MyPosts;
