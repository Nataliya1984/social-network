import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {

  return <div className={classes.messag}>{props.messag} </div>;
};

  export default Message;