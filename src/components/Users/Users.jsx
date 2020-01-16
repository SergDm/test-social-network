import React from 'react';
import classes from './Users.module.css';
import Paginator from '../commonn/Paginator/Paginator';
import User from './User';
import { NavLink } from 'react-router-dom';


const Users = (props) => {
  const classesSum = classes.button + ' ' + classes.buttonSearch;
  return (
    <div>
      <div>
      <NavLink to={'/userssearch'}><button className={classesSum} >Search</button></NavLink>
        <Paginator currentPage={props.currentPage}
          onPageChanged={props.onPageChanged}
          pageSize={props.pageSize}
          totalItemsCount={props.totalUsersCount} />
      </div>
      <div className={classes.users}>
        {
        props.users.map(user => <User user={user}
          key={user.id}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow} />
        )
      }
      </div>
    </div>
  )
}

export default Users;