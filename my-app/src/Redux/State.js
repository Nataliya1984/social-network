const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';
const ADD_DIALOGS = 'ADD-DIALOGS';

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Hi, how are you?", grade: "like 10" },
        { message: "It`s my first post", grade: "like 1" },
        { message: "hello", grade: "like 5" },
        { message: "", grade: "like 1" },
        { message: "", grade: "like 16" },
      ],
      newPostText: "Коментарии",
    },

    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        {
          name: "Andrew",
          avatar:
            "https://s3.nat-geo.ru/images/2019/4/10/d538d99ad231423dad42f0d17499f9e0.max-2000x1000.jpg",
          id: 1,
        },
        {
          name: "Sweta",
          avatar:
            "https://s3.nat-geo.ru/images/2019/4/10/d538d99ad231423dad42f0d17499f9e0.max-2000x1000.jpg",
          id: 2,
        },
        {
          name: "Sasha",
          avatar:
            "https://s3.nat-geo.ru/images/2019/4/10/d538d99ad231423dad42f0d17499f9e0.max-2000x1000.jpg",
          id: 3,
        },
      ],
    },
  },
  _rerenderEntireTree() {
    console.log("hello");
  },

  getState () {
    return this._state;
  },
  substribe(observer){
    this._rerenderEntireTree = observer;
  },
  
  addDialogs(){
    let newMessag = {
      messag: this._state.dialogsPage.newDialogText,
      id: 3,
    };
  
    /*  let newDialog = {
      id: 3,
          name: "Katya",
          img: "https://www.myzoomag.com.ua/image/cache/data/article/1-500x500.jpg",
    } */
    /*  this._state.dialogsPage.dialogData.push(newDialog);
    rerenderEntireTree(state); */
    this._state.dialogsPage.messageData.push(newMessag);
    this._state.dialogsPage.newDialogText = "";
    this._rerenderEntireTree(this._state);
  },
  updateNewDialogText (newText){
    this._state.dialogsPage.newDialogText = newText;
    this._rerenderEntireTree(this._state);
  },
  addPost(){
    let newPosts = {
      message: this._state.profilePage.newPostText,
      grade: "like 0",
    };
    this._state.profilePage.posts.push(newPosts);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },

  dispatch (action) {
    if (action.type === 'ADD-DIALOGS'){
      let newMessag = {
        messag: this._state.dialogsPage.newDialogText,
        id: 3,
      };
    
      /*  let newDialog = {
        id: 3,
            name: "Katya",
            img: "https://www.myzoomag.com.ua/image/cache/data/article/1-500x500.jpg",
      } */
      /*  this._state.dialogsPage.dialogData.push(newDialog);
      rerenderEntireTree(state); */
      this._state.dialogsPage.messageData.push(newMessag);
      this._state.dialogsPage.newDialogText = "";
      this._rerenderEntireTree(this._state);
    }
    else if (action.type === 'UPDATE-NEW-DIALOG-TEXT') {
      this._state.dialogsPage.newDialogText = action.newText;
    this._rerenderEntireTree(this._state);
    }
    else if(action.type === 'ADD-POST') {
      let newPosts = {
        message: this._state.profilePage.newPostText,
        grade: "like 0",
      };
      this._state.profilePage.posts.push(newPosts);
      this._state.profilePage.newPostText = "";
      this._rerenderEntireTree(this._state);
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
    this._rerenderEntireTree(this._state);
    }
  }
 
};

export let addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export let updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
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


export default store;
