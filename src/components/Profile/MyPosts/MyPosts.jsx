import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = () => {

    let posts =[
        {id:"11", message:"I am learned 25 lessons! We learn MAP function", likeCounter: "1"},
        {id:"10", message:"I am learned 24 lessons! We add BLL (business layer logic) in UI,add (objects)", likeCounter: "1"},
        {id:"9", message:"I am learned 22 lessons! We add Navlik-s for friends link dialogs", likeCounter: "1"},
        {id:"8", message:"I am learned 21 lessons! We add DOM murkup for messages component", likeCounter: "1"},
        {id:"7", message:"I am learned 20 lessons! We learn Navlink-s this tan not reload page, and we add attributes 'to' and 'activeClassName'", likeCounter: "1"},
        {id:"6", message:"I am learned 19 lessons! We learn react-router-dom and add components to routing", likeCounter: "1"},
        {id:"5", message:"I am learned 18 lessons! We add new component for page messages/dialogs", likeCounter: "1"},
        {id:"4", message:"I am learned 17 lessons! We repeat previous lessons and contcepts", likeCounter: "1"},
        {id:"3", message:"I am learned 16 lessons! We learn properties, we add properties to dynamic component", likeCounter: "1"},
        {id:"2", message:"I am learned 15 lessons! We split code Profile to MyPosts an Post"},
        {id:"1", message:"I am learned 14 lessons! We split code into files Profile, Navbar and Header"}
    ];

    let postsElements = posts.map( p => <Post message={p.message} likeCounter={ p.likeCounter}/> );

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
