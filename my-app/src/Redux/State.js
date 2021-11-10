import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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

  getState() {
    return this._state;
  },
  substribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

    this._rerenderEntireTree(this._state);
  },
};

export default store;
