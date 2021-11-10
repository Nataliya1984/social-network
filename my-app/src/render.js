/* import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { updateNewPostText } from "./Redux/State";
import { updateNewDialogText } from "./Redux/State";
import { addPost } from "./Redux/State";
import { addDialogs } from "./Redux/State";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addDialogs={addDialogs}
        updateNewDialogText={updateNewDialogText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default rerenderEntireTree; */
