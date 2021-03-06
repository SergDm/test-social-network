import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../commonn/loader/Preloader';
import ava from '../../Image/ava2.png';
import ProfileDataForm from './ProfileDataForm';
import { ProfileData } from './ProfileData';
import baner from '../../Image/baner.png'
import ModalWindow from '../../ModalWindow/ModalWindow';
import Button from '../../commonn/Button/Button';

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [isModal, setModal] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelect = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
      () => { setEditMode(false) }
    )
  }

  return (
    <div className={classes.post}>
      {props.flagBaner && <div>< img className={classes.baner} src={baner} alt='baner' /></div>}
      <Button 
      name={props.flagBaner ? "delete baner" : 'show baner'} 
      event={props.deleteBaner}
      type='baner'
      />
      <div className={classes.dataFile}>
        <div className={classes.left}>
          <div>
            {isModal && <ModalWindow setModal={() => setModal(false)} foto={props.profile.photos.large} />}
            < img className={classes.profileFoto}
              src={props.profile.photos.large ? props.profile.photos.large : ava}
              alt='photos' onClick={() => setModal(true)} />
          </div>
          <div>
            {props.isOwner && <label className={classes.customFileUpload}>
              <input className={classes.inputfile} type='file' id='photo' onChange={onMainPhotoSelect} />
              Upload photo
              </label>}
          </div>
        </div>
        <div className={classes.center}>
          {!editMode
            ? <ProfileData profile={props.profile}
              status={props.status}
              updateStatus={props.updateStatus}
              isOwner={props.isOwner}
              goToEditMode={() => { setEditMode(true) }} />
            : <ProfileDataForm profile={props.profile}
              status={props.status}
              updateStatus={props.updateStatus}
              onSubmit={onSubmit}
              initialValues={props.profile} />}
        </div>
        <div className={classes.right}><h1>Additional Information</h1></div>
      </div>
      {props.flagBaner && <div>< img className={classes.baner} src={baner} alt='baner' /></div>}
    </div>
  )
}

export default ProfileInfo;