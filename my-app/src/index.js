import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App
          store={store}
          state={state}
          dispatch={store.dispatch.bind(store)}
        />
      </React.StrictMode>
      ,
    </Provider>,
    document.getElementById("root")
  );
};

/* rerenderEntireTree(store.getState());
store.substribe(); */

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

/* store.subscribe(() => renderEntireTree(store.getState())) */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
