import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { AddNewPostFormRedux } from './MyPostForm';


const MyPosts = (props) => {

  const onDeletePost = (id) => {
    props.delPost(id)
  }

  const onLikePlus = (id) => {
    props.likePlusAdd(id)
  }

  const onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  const postElement = props.postData.map(post =>
    <Post
      key={post.id}
      id={post.id}
      name={post.name}
      message={post.message}
      likeCount={post.likeCount}
      onDeletePost={onDeletePost}
      onLikePlus={onLikePlus} 
      likeTouch={post.likeTouch}
      />)

  return (
    <div className={classes.myPost}>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={classes.post}>
        {postElement}
      </div>
    </div>
  )
}

export default React.memo(MyPosts);