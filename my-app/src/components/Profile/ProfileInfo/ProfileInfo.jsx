import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
       <div>
           <div>
        <img src="https://www.ejin.ru/wp-content/uploads/2017/09/1-887.jpg" />
      </div>
      <div className={classes.profileInfoBlock}>ava+description</div>
       </div> 
    );
}

export default ProfileInfo;