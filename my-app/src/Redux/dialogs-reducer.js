const UPDATE_NEW_DIALOG_TEXT = "UPDATE-NEW-DIALOG-TEXT";
const ADD_DIALOGS = "ADD-DIALOGS";

let initialState = {
  messageData: [
    { messag: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.", id: 1 },
   { messag: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.", id: 2 }, 
  ],

  dialogData: [
    {
      id: 1,
      name: "Екатерина",
      img: "https://cs8.pikabu.ru/post_img/2016/05/23/11/1464032139122642778.jpg",
    },
    {
      id: 2,
      name: "Александр",
      img: "https://avatarfiles.alphacoders.com/164/thumb-1920-164590.jpg",
    },
  ],
  newDialogText: "Ведите ваше сообщение",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOGS: {
      let newMessag = {
        messag: state.newDialogText,
        id: 3,
      };
      let stateCopy = {...state};
      stateCopy.messageData = [...state.messageData];
      stateCopy.messageData.push(newMessag);
      stateCopy.newDialogText = "";
      return stateCopy;
    }

    case UPDATE_NEW_DIALOG_TEXT: {
      let stateCopy = {...state};
      stateCopy.newDialogText = action.newText;
      return stateCopy;
    }
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
