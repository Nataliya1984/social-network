import React from "react";
import classes from "./Dialogs.module.css";
import DialogItems from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import AddDialogContainer from "./AddDialog/AddDialogContainer";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let messageElements = state.messageData.map((messag) => (
    <Message messag={messag.messag} id={messag.id} />
  ));

  let dialogElements = state.dialogData.map((dialog) => (
    <DialogItems name={dialog.name} id={dialog.id} img={dialog.img} />
  ));

  return (
    <div className={classes.dialogs}>
      <AddDialogContainer store={props.store} />

      <div className={classes.dialogItems}>{dialogElements}</div>

      <div className={classes.message}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
