import React from 'react'
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import Button from '../../commonn/Button/Button';

export const ProfileData = ({ profile, status, updateStatus, isOwner, goToEditMode }) => {
    return (
        <div className={classes.post2}>
            {isOwner && <div><Button name='Edit profile' event={goToEditMode}/></div>}
            <p>Name: {profile.fullName}</p>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            <p>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</p>
            {profile.lookingForAJob && <p>My professional skills: {profile.lookingForAJobDescription}</p>}
            <p>About me: {profile.aboutMe ? profile.aboutMe : 'Unknown'}</p>
            <p>Contacts: {profile.contacts.facebook ? profile.contacts.facebook : 'Unknown'}</p>
            <p>Id: {profile.userId}</p>
        </div>
    )
}