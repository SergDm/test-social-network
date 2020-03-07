import React from 'react';
import classes from './Post.module.css';
import ava from '../../../Image/ava2.png';
import button from '../../../Image/like.png'
import Button from '../../../commonn/Button/Button';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <Button type='delete'
        event={() => props.onDeletePost(props.id)} />
      <img src={ava} alt='Ava' />
      <b>{props.name}</b>
      <p>{props.message}</p>
      <div>
        <input type="image"
          src={button}
          alt='button'
          disabled= {props.likeTouch}
          onClick={() => props.onLikePlus(props.id)} />
        {props.likeCount}
      </div>
    </div>
  )
}

export default Post;
