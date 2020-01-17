import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { AddNewPostFormRedux } from './MyPostForm';


const MyPosts = (props) => {

    const postElement = props.postData.map(post => <Post key={post.id} name={post.name} message={post.message} likeCount={post.likeCount} />)

    let onAddPost = (values) => {
      props.addPost(values.newPostText)
    }

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