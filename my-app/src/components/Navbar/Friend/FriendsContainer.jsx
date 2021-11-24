import React from "react";
import { connect } from "react-redux";
import StoreContext from "../../../StoreContext";
import Friends from "./Friend";
import classes from "./Friend.module.css";
import FriendsItem from "./FriendsItem/FriendsItem";

/* const FriendsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().sidebar;
        return <Friends friends={state.friends} />;
      }}
    </StoreContext.Consumer>
  );
}; */

let mapStateToProps = (state) => {
   
   return {
    friends: state.sidebar.friends,
   } 
}

const FriendsContainer = connect (mapStateToProps)(Friends);

export default FriendsContainer;
