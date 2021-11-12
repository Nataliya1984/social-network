const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { message: "Hi, how are you?", grade: "like 10" },
    { message: "It`s my first post", grade: "like 1" },
    { message: "hello", grade: "like 5" },
    { message: "", grade: "like 1" },
    { message: "", grade: "like 16" },
  ],
  newPostText: "Коментарии",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPosts = {
        message: state.newPostText,
        grade: "like 0",
      };
      state.posts.push(newPosts);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
