import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {



  return (
    <div className={classes.item}>
      <img src="https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg" />     
      {props.message}
      <div>
        <span>{props.grade}</span>
      </div>
    </div>
  );
};

export default Post;
