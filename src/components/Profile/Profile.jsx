import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPost/MyPostsContainer';


const Profile = (props) => {

  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        saveProfile={props.saveProfile}
        updateStatus={props.updateStatus}
        flagBaner={props.flagBaner}
        deleteBaner={props.deleteBaner}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;