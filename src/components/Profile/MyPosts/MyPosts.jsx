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
          <Post message="I am learned 22 lessons! We add Navlik-s for friends link dialogs" likeCounter="1"/>
          <Post message="I am learned 21 lessons! We add DOM murkup for messages component" likeCounter="1"/>
        <Post message="I am learned 20 lessons! We learn Navlink-s this tan not reload page, and we add attributes 'to' and 'activeClassName'" likeCounter="1"/>
        <Post message="I am learned 19 lessons! We learn react-router-dom and add components to routing" likeCounter="1"/>
        <Post message="I am learned 18 lessons! We add new component for page messages/dialogs" likeCounter="1"/>
        <Post message="I am learned 17 lessons! We repeat previous lessons and contcepts" likeCounter="1"/>
        <Post message="I am learned 16 lessons! We learn properties, we add properties to dynamic component" likeCounter="1"/>
        <Post message="I am learned 15 lessons! We split code Profile to MyPosts an Post"/>
        <Post message="I am learned 14 lessons! We split code into files Profile, Navbar and Header"/>
      </div>
    </div>
  )

}

export default MyPosts;
