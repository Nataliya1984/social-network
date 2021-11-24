import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  
  let postElements = props.posts.map((p) => (
    <Post message={p.message} grade={p.grade} />
  ));

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  let onAddPost = () => {
    props.addPost();
  };

  return (
    <div className={classes.myPostsBlock}>
      <h3> Мои сообщения </h3>
      <div>
        <div className={classes.textBlock}>
          <textarea className={classes.textInput}
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div className={classes.button}>
          <div onClick={onAddPost} className={classes.buttonPost}>add posts</div>
        </div>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
