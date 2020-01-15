import { profileReducer, addPostActionCreator, deletePost } from "./profileReducer";

let state = {
  postData: [
    { id: 1, message: 'Hi, how are you?', likeCount: 15 },
    { id: 2, message: "It's my first post", likeCount: 10 },
    { id: 3, message: "It's my", likeCount: 1 }
  ],

}

it('length of postData should be incremented', () => {
  let action = addPostActionCreator('newPostText')
  
  let newState = profileReducer(state, action)

  expect(newState.postData.length).toBe(4)

})

it('message of new post should be correct', () => {
  let action = addPostActionCreator('newPostText')
  
  let newState = profileReducer(state, action)

  expect(newState.postData[3].message).toBe('newPostText')
})

it('after deleting length of messages should be decrement', () => {
  let action = deletePost(1)
  
  let newState = profileReducer(state, action)

  expect(newState.postData.length).toBe(2)
})

it("after deleting length shouldn't be decrement if id is incorrect", () => {
  let action = deletePost(1000)
  
  let newState = profileReducer(state, action)

  expect(newState.postData.length).toBe(3)
})

