import React from "react";
import { connect } from "react-redux";
import {
  addDialogsActionCreator,
  updateNewDialogTextActionCreator,
} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    
return {
    messageData: state.dialogsPage.messageData,
    dialogData: state.dialogsPage.dialogData,
    newDialogText: state.dialogsPage.newDialogText,
}
}

let mapDispatchToProps = (dispatch) => {
   
    return {
        updateNewDialogText: (text) => {
            const action = updateNewDialogTextActionCreator(text);
            dispatch(action);
            console.log(text);
        },
        addDialog: () => {
            dispatch(addDialogsActionCreator());
        },
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
