import React from 'react';
import ava from '../Image/ava2.png';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css'
import Button from '../commonn/Button/Button';

const User = ({ user, followingInProgress, unfollow, follow }) => {

const followingDisabled = followingInProgress.some(id => id === user.id)

  return (
    <div className={classes.usersColum}>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : ava} alt='ava' />
          </NavLink>
        </div>
        <div>
          {user.followed
            ? <Button name='Unfollow' event={() => { unfollow(user.id) }} disabled={followingDisabled}/>
            : <Button name='Follow' event={() => { follow(user.id) }} disabled={followingDisabled}/>}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{!user.status ? 'Unknown' : user.status}</div>
        </span>
        <span>
          <div>{!user.id ? 'Unknown' : user.id}</div>
          <div>{'Unknown'}</div>
        </span>
      </span>
    </div>
  )
}

export default User;