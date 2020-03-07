import React from 'react'
import { createField, Input, Textarea } from '../../commonn/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import classes from './ProfileInfo.module.css';
import Button from '../../commonn/Button/Button';

const ProfileDataForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.post}>
                <div><Button name='Save'/></div>
                {error && <div className={classes.formSummaryError}> {error} </div>}
                <b>Name: {createField('Full name', 'fullName', Input, [])}</b>
                <b>Looking for a job: {createField('', 'lookingForAJob', Input, [], { type: 'checkbox' })}</b>
                <b>My professional skills: {createField('My professional skills', 'lookingForAJobDescription', Textarea, [])}</b>
                <b>About me: {createField('About me', 'aboutMe', Textarea, [])}</b>
                <b>Contacts: {createField('facebook', 'contacts.facebook', Input, [])}</b>
            </div>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({ form: 'editProfile' })(ProfileDataForm)
export default ProfileDataFormRedux