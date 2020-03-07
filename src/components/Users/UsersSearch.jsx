import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getUser, getTotalUsersCount, getCurrentPage } from '../../data/usersSelectors'
import { getUsers } from '../../data/usersReducer';
import classes from './Users.module.css';
import Paginator from '../commonn/Paginator/Paginator';
import { NavLink, Link } from 'react-router-dom';
import ava from '../Image/ava2.png';
import Button from '../commonn/Button/Button';

class UsersSearch extends Component {

  state = {
    search: "",
    flagSearch: false
  }

  componentDidMount() {
    const { currentPage } = this.props
    this.props.getUsers(currentPage, 100)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, 100)
  }

  hadlerInput = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {

    const dataUsers = this.props.users

    const searchUserName = dataUsers.filter(sUser => sUser.name.toLowerCase() === this.state.search.toLowerCase())

    const searchUserId = dataUsers.filter(sUser => sUser.id === parseInt(this.state.search))

    const userElement = (data, cl) => {
      return data.map(user =>
        <NavLink className={cl} to={'/profile/' + user.id} key={user.id}><div >
          <div><img src={user.photos.small !== null ? user.photos.small : ava} alt='ava' /></div>
          <div>Name: {user.name}</div>
          <div>Id: {user.id}</div>
          <div>Subscription: {user.followed ? 'yes' : 'no'}</div>
        </div></NavLink>)
    }

    const userBlock = userElement(dataUsers, classes.userBlock)

    const foundUserName = userElement(searchUserName, classes.usersFound)

    const foundUserId = userElement(searchUserId, classes.usersFound)

    return (
      <div>
        <Link to={'/users'}><Button name='BACK' /></Link>
        <div>
          <Paginator currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            pageSize={100}
            totalItemsCount={this.props.totalUsersCount} />
        </div>
        <div align='center'>
          <div className={classes.button}>
            <b>Search by name or ID: </b>
            <input
              type="text"
              onChange={this.hadlerInput}
              placeholder={'Enter name or ID'}>
            </input>
          </div>
        </div>
        <div>{foundUserId}</div>
        <div>{foundUserName}</div>
        <div className={classes.usersTable}>
          {userBlock}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUser(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
  }
}

export default compose(connect(mapStateToProps, { getUsers }))(UsersSearch);