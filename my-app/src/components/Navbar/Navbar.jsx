import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friend/Friend";
import FriendsContainer from "./Friend/FriendsContainer";
import classes from "./Navbar.module.css";

const Navbar = (props) => {

 
  
  return (
    
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.navActiv}>
          Profile
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.activ}`}>
        <NavLink to="/dialogs" activeClassName={classes.navActiv}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.navActiv}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.navActiv}>
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.navActiv}>
          Settings
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.friends}`}>
        <NavLink to="/friends" activeClassName={classes.navActiv}>
          Friends
        </NavLink>
        <div className={classes.friend}>
          <FriendsContainer />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
