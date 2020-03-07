import { addPost, delPost, likePlusAdd } from '../../../data/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps, { likePlusAdd, addPost, delPost })(MyPosts);

export default MyPostsContainer;
