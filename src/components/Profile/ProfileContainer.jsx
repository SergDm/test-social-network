import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../data/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUsers } from '../../data/usersReducer';

class ProfileContainer extends React.Component {

state= {
  flagBaner: true
}

deleteBaner = () => {
  this.setState({flagBaner: !this.state.flagBaner})
}
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    } if (!userId) {
      this.props.history.push('/login')
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile()
    this.props.getUsers(1, 100);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        flagBaner={this.state.flagBaner}
        deleteBaner={this.deleteBaner}/>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile, getUsers }),
  withRouter
)(ProfileContainer)