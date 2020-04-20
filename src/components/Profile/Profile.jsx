import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://www.partyrama.co.uk/wp-content/uploads/2014/02/beach006.jpg" />
      </div>
      <div>
        <img src="https://nulm.gov.in/images/user.png"/> + desc
      </div>
      <MyPosts />
    </div>
  )

}

export default Profile;
