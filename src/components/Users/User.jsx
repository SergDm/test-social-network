import React from 'react';
import ava from '../Image/ava2.png';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css'

const User = ({ user, followingInProgress, unfollow, follow }) => {

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
            ? <button className={classes.button} disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id) }}>Unfollow</button>
            : <button className={classes.button} disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id) }}>Follow</button>}
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