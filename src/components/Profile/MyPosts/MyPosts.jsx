import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = () => {
  return (
    <div>
      my posts
      <div className={s.postMessage}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
          <Post message="I am learned 14 lessons! We split code into files Profile, Navbar and Header"/>
          <Post message="I am learned 15 lessons! We split code Profile to MyPosts an Post"/>
          <Post message="I am learned 16 lessons! We learn properties, we add properties to dynamic component" likeCounter="1"/>
          <Post message="I am learned 17 lessons! We repeat previous lessons and contcepts" likeCounter="1"/>
      </div>
    </div>
  )

}

export default MyPosts;
