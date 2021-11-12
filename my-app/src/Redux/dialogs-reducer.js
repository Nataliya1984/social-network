const UPDATE_NEW_DIALOG_TEXT = "UPDATE-NEW-DIALOG-TEXT";
const ADD_DIALOGS = "ADD-DIALOGS";

let initialState = {
  messageData: [
    { messag: "привет", id: 1 },
    { messag: "как дела?", id: 2 },
  ],

  dialogData: [
    {
      id: 1,
      name: "Andrey",
      img: "https://www.myzoomag.com.ua/image/cache/data/article/1-500x500.jpg",
    },
    {
      id: 2,
      name: "Katya",
      img: "https://www.myzoomag.com.ua/image/cache/data/article/1-500x500.jpg",
    },
  ],
  newDialogText: "Ведите ваше сообщение",
};

const dialogsReducer = (state = initialState, action) => {
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

export const addDialogsActionCreator = () => {
  return {
    type: ADD_DIALOGS,
  };
};

export const updateNewDialogTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_DIALOG_TEXT,
    newText: text,
  };
};

export default dialogsReducer;
