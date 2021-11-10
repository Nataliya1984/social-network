const UPDATE_NEW_DIALOG_TEXT = "UPDATE-NEW-DIALOG-TEXT";
const ADD_DIALOGS = "ADD-DIALOGS";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_DIALOGS:
      let newMessag = {
        messag: state.newDialogText,
        id: 3,
      };

      state.messageData.push(newMessag);
      state.newDialogText = "";
      return state;

    case UPDATE_NEW_DIALOG_TEXT:
      state.newDialogText = action.newText;
      return state;
    default:
      return state;
  }
};

export let addDialogsActionCreator = () => {
  
    return {
     type:ADD_DIALOGS,
    }
  }
  
  export let updateNewDialogTextActionCreator = (text) => {
   
    return {
      type: UPDATE_NEW_DIALOG_TEXT, 
      newText: text,
    }
  }

export default dialogsReducer;
