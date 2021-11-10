import React from "react";
import classes from "./Dialogs.module.css";
import DialogItems from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import AddDialog from "./AddDialog/AddDialog";



const Dialogs = (props) => {


 let messageElements = props.dialogsPage.messageData.map( (messag) => (<Message messag={messag.messag} id={messag.id} />))

      let dialogElements = props.dialogsPage.dialogData
 .map ((dialog) => (<DialogItems name={dialog.name} id={dialog.id} img={dialog.img}/>)) 
 

  return (
    <div className={classes.dialogs}>

      <AddDialog dispatch={props.dispatch}
       newDialogText={props.dialogsPage.newDialogText}
        />

      <div className={classes.dialogItems}>
        { dialogElements }
      </div>

      <div className={classes.message}>
        {messageElements}
      </div>
    </div>
  );

  
};

export default Dialogs;
