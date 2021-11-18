import React from "react";
import classes from "./AddDialog.module.css";

const AddDialog = (props) => {
  let newDialogsElements = React.createRef();

  let onDialogChange = () => {
    let text = newDialogsElements.current.value;
    props.updateNewDialogText(text);
    console.log(text);
  };

  let onAddDialogs = () => {
    props.addDialogs();
  };

  return (
    <div className={classes.addDialog}>
      <div className={classes.editDialog}>
        <textarea
          ref={newDialogsElements}
          onChange={onDialogChange}
          value={props.newDialogText}
        />
      </div>
      <div className={classes.btn}>
        <div onClick={onAddDialogs} className={classes.button}>
          add dialogs
        </div>
      </div>
    </div>
  );
};

export default AddDialog;
