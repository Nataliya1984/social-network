import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogsItem.module.css';

const DialogItems = (props) => {
  return (
    <div className={classes.dialogItems}>
      <div className={`${classes.dialog} ${classes.active}`}>
        <div className={classes.avatar}>
          <img src={props.img} />
        </div>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      </div>
    </div>
  );
};

  export default DialogItems;