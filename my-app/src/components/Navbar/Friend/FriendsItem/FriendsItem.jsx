import React from "react";
import classes from "./FriendsItem.module.css";

const FriendsItem = (props) => {
  return (
    <div className={classes.wrapp}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.avatar}>
        <img src={props.avatar} />
      </div>
    </div>
  );
};

export default FriendsItem;
