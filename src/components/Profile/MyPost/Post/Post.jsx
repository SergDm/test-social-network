import React from 'react';
import classes from './Post.module.css';
import ava from '../../../Image/ava2.png';
import button from '../../../Image/like.png'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src={ava} alt='Ava' />
      <b>{props.name}</b>
      <p>{props.message}</p>
      <div>
        <input type="image" src={button} alt='button' />
        {props.likeCount}
      </div>
    </div>
  )
}

export default Post;
