import React from "react";
import classes from "./Friend.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {


  let friendsElements = props.friends.map((f) => (
    <FriendsItem name={f.name} avatar={f.avatar} />
  ));



  return <div className={classes.friend}>{friendsElements}</div>;
};

export default Friends;
