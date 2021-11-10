import React from 'react';
import { addDialogsActionCreator, updateNewDialogTextActionCreator } from '../../../Redux/State';
import classes from './AddDialog.module.css';




const AddDialog = (props) => {

    let newDialogsElements = React.createRef();

    let addDialogs = () => {
        props.dispatch(addDialogsActionCreator());
       
    }

    let onDialogChange = () => {
        let text = newDialogsElements.current.value;
      const action = updateNewDialogTextActionCreator(text);
        props.dispatch(action);
       console.log(text);
    }


  return (
    <div className={classes.addDialog}>
      <div className={classes.editDialog}>
        <textarea ref ={newDialogsElements}
                  onChange={onDialogChange}
                  value={props.newDialogText} />
      </div>
      <div className={classes.btn}>
        <div onClick={addDialogs} className={classes.button}>add dialogs</div>
      </div>
    </div>
  );
};

export default AddDialog;