import React from "react";
import classes from "./Dialogs.module.css";
import DialogItems from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let messageElements = props.messageData.map((messag) => (
    <Message messag={messag.messag} id={messag.id} />
  ));

  let dialogElements = props.dialogData.map((dialog) => (
    <DialogItems name={dialog.name} id={dialog.id} img={dialog.img} />
  ));

  let newDialogsElements = React.createRef();

  let onAddDialogs = () => {
     props.addDialog();
     
  }

  let onDialogChange = () => {
      let text = newDialogsElements.current.value;
      props.updateNewDialogText(text);
      
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.addDialog}>
      <div className={classes.ditDialog}>
        <textarea className={classes.textInput}
                  ref ={newDialogsElements}
                  onChange={onDialogChange}
                  value={props.newDialogText} />
      </div>
      <div className={classes.btn}>
        <div onClick={onAddDialogs} className={classes.buttonDialogs}>add dialogs</div>
      </div>
    </div>

      <div className={classes.dialogItems}>{dialogElements}</div>

      <div className={classes.message}>{messageElements}</div>
    </div>
  );
};



export default Dialogs;
