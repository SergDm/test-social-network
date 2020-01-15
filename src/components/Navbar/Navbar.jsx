import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import ava from '../Image/ava2.png';
import { getUser } from '../../data/usersSelectors';
import { connect } from 'react-redux';
import { compose } from 'redux';


const Navbar = (props) => {

  const state = [
    { link: '/profile', name: 'Профиль' },
    { link: '/dialogs', name: 'Сообщения' },
    { link: '/news', name: 'Новости' },
    { link: '/users', name: 'Друзья' },
    { link: '/music', name: 'Музыка' }
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
                  <li><NavLink to='/setting' activeClassName={classes.activ}>Настройки</NavLink>
                    <ul>
                      <li><a href="#m3_1">Общие</a></li>
                      <li><a href="#m3_2">Разное</a></li>
                      <li><a href="#m3_3">Безопасность</a></li>
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
