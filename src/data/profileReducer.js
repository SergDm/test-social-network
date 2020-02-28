import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
  postData: [
    { id: 1, name: 'Bill', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi officia, doloribus, fugit consequatur laudantium veritatis, facilis minima nihil nostrum natus a?', likeCount: 15 },
    { id: 2, name: 'Joe', message: "It's my first post", likeCount: 10 },
    { id: 3, name: 'Sam', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi officia, doloribus, fugit consequatur laudantium veritatis, facilis minima nihil nostrum natus a? Adipisci consequatur maiores magnam velit, doloribus illum officia eligendi.", likeCount: 1 }
  ],

  profile: null,
  status: '',
  newPostText: ''
}


export const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:
      let newPost = {
        id: Math.floor(Math.random() * 10),
        name: 'you',
        message: action.newPostText,
        likeCount: 0
      };

      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ''
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };

    case DELETE_POST:
      return {
        ...state,
        postData: state.postData.filter(post => post.id !== action.postId)
      }

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos }
      }

    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId)

  dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)

  dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId
  let response = await profileAPI.saveProfile(profile)

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else if(response.data.resultCode === 1) {
    dispatch(stopSubmit('editProfile', { _error: response.data.messages[0] }))
    return Promise.reject(response.data.messages[0])
  }
}
