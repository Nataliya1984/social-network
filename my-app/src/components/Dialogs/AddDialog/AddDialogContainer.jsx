import React from "react";
import {
  addDialogsActionCreator,
  updateNewDialogTextActionCreator,
} from "../../../Redux/dialogs-reducer";
import AddDialog from "./AddDialog";

const AddDialogContainer = (props) => {
  let state = props.store.getState();

  let onDialogChange = (text) => {
    let action = updateNewDialogTextActionCreator(text);
    props.store.dispatch(action);
    console.log(text);
  };

  let addDialogs = () => {
    props.store.dispatch(addDialogsActionCreator());
  };

  return (
    <AddDialog
      updateNewDialogText={onDialogChange}
      addDialogs={addDialogs}
      dialogData={state.dialogsPage.dialogData}
      messageData={state.dialogsPage.messageData}
      newPostText={state.dialogsPage.newDialogText}
    />
  );
};

export default AddDialogContainer;
