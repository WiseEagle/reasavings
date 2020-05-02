import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div><NavLink to="/profile"  className={s.item} activeClassName={s.active}>Profile</NavLink></div>
      <div><NavLink to="/dialogs"  className={s.item} activeClassName={s.active}>Messages</NavLink></div>
      <div><NavLink to="/workout"  className={s.item} activeClassName={s.active}>Workout</NavLink></div>
        <div><NavLink to="/future_i"  className={s.item} activeClassName={s.active}>Future I</NavLink></div>
      <div><NavLink to="/news"  className={s.item} activeClassName={s.active}>News</NavLink></div>
      <div><NavLink to="/music"  className={s.item} activeClassName={s.active}>Music</NavLink></div>
      <div><NavLink to="/settings"  className={s.item} activeClassName={s.active}>Settings</NavLink></div>

    </nav>
  )

}

export default Nav;
