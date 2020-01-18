import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import ava from '../Image/ava2.png';
import { getUser } from '../../data/usersSelectors';
import { connect } from 'react-redux';
import { compose } from 'redux';


const Navbar = (props) => {

  const state = [
    { link: '/profile', name: 'Profile' },
    { link: '/dialogs', name: 'Messages' },
    { link: '/code', name: 'CodeJS' },
    { link: '/users', name: 'Friends' },
    { link: '/music', name: 'Music' }
  ]

  const menuTop = state.map((item, i) => <li key={i}>
    <NavLink to={item.link} activeClassName={classes.activ}>{item.name}</NavLink>
  </li>)

  let friendsState = props.users.filter(user => user.followed)

  let friends = friendsState.map(friends =>
    <div key={friends.id}>
      <NavLink to={'/profile/' + friends.id}>
        < img src={ava} alt='logo' />
      </NavLink>
      <div>{friends.name}</div>
      <div>{friends.id}</div>
    </div>
  )

  return (
    <div >
      <div>
        <nav className={classes.nav}>
          <nav id={classes.menuVertical}>
            <ul>
              {menuTop}
              <nav id={classes.menuVertical}>
                <ul>
                  <li><NavLink to='/settings' activeClassName={classes.activ}>Settings</NavLink>
                    <ul>
                      <li><a href="#m3_1">Global</a></li>
                      <li><a href="#m3_2">Different </a></li>
                      <li><a href="#m3_3">Security</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </ul>
          </nav>
        </nav>
      </div>
      <div>
        <div className={classes.friends_title}><h2>Friends</h2></div>
        <div className={classes.friends}>{friends}</div>

      </div>
    </div>
  )
}


let mapStateToProps = (state) => {
  return {
    users: getUser(state)
  }
}

export default compose(connect(mapStateToProps))(Navbar);
