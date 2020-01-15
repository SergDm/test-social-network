import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getUser, getTotalUsersCount, getCurrentPage } from '../../data/usersSelectors'
import { getUsers } from '../../data/usersReducer';
import classes from './Users.module.css';
import Paginator from '../commonn/Paginator/Paginator';
import { NavLink } from 'react-router-dom';

class UsersTable extends Component {

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

    const searchUser = this.props.users.filter(sUser => sUser.name.toLowerCase() === this.state.search.toLowerCase())

    const userElement = (user, cl) => {
      return user.map(user =>
        <NavLink className={cl} to={'/profile/' + user.id} key={user.id}><div >
          <div>Name: {user.name}</div>
          <div>Id: {user.id}</div>
          <div>Subscription: {user.followed ? 'yes' : 'no'}</div>
        </div></NavLink>)}

    const userBlock = userElement(this.props.users, classes.userBlock)

    const foundUser = userElement(searchUser, classes.usersFound)

    return (
      <div>
        <NavLink to={'/users'}><button className={classes.button}>Back</button></NavLink>
        <div>
          <Paginator currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            pageSize={100}
            totalItemsCount={this.props.totalUsersCount} />
        </div>
        <div>ПОИСК: <input type="text" onChange={this.hadlerInput} placeholder={'Enter name'}
></input></div>
        <div>{foundUser}</div>
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

export default compose(connect(mapStateToProps, { getUsers }))(UsersTable);