import React from 'react';
import classes from './Post.module.css';
import ava from '../../../Image/ava2.png';

const Post = (props) => {
return (
  <div className={classes.item}>
    <img src={ava} alt='Ava' />
      {props.message}
      <div className={classes.like}>
      <button className={classes.like} >Like</button>
      {props.likeCount}
      </div>
    </div>
  )
}

export default Post;
