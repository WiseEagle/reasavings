import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <div className={s.imageHolder}>
        <img src="https://i89.fastpic.ru/big/2017/0425/c8/70ee5c20c0e5bb5f61d4bba4af343fc8.jpg" alt=""/>
      </div>
      I am learned 15 lessons!
      <span className="s.like">
        <a href="#">like</a>
      </span>
    </div>
  )

}

export default Post;
