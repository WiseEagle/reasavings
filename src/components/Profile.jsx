import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://www.partyrama.co.uk/wp-content/uploads/2014/02/beach006.jpg" />
      </div>
      <div>
        <img src="https://nulm.gov.in/images/user.png"/> + desc
      </div>
      <div>
        my posts
        <div>
          new post
        </div>
        <div className={s.profile}>
            <div className={s.item}>
              Post 1
            </div>
            <div className={s.item}>
             Post 2
            </div>
        </div>
      </div>
    </div>
  )

}

export default Profile;
