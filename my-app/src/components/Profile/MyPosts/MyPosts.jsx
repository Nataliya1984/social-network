import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/State";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} grade={p.grade} />
  ));

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch(addPostActionCreator());
  };

  return (
    <div className={classes.myPostsBlock}>
      <h3> My posts </h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div className={classes.button}>
          <button onClick={addPost}>add posts</button>
        </div>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
