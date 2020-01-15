import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { sideBarReducer } from "./sideBarReducer";

export let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Hi, how are you?', likeCount: 15 },
        { id: 2, message: "It's my first post", likeCount: 10 },
        { id: 3, message: "It's my", likeCount: 1 }
      ],
      newPostText: 'Same Message'
    },

    dialogsPage: {
      messageData: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Как дела' },
        { id: 3, message: 'YO' },
        { id: 4, message: 'Привет' },
        { id: 5, message: 'Привет' },
        { id: 6, message: 'Как дела' }
      ],

      dialogData: [
        { id: 1, name: 'User1' },
        { id: 2, name: 'User2' },
        { id: 3, name: 'User3' },
        { id: 4, name: 'User4' },
        { id: 5, name: 'User5' },
        { id: 6, name: 'User6' }
      ],
      newMessageBody: ''
    },
  },

  _callSubscriber() {
    console.log('');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  
  getState() {
    return this._state;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sideBarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}

