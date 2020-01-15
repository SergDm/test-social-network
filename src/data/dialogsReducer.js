const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  messageData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'What are you doing?' },
    { id: 3, message: 'YO' },
    { id: 4, message: 'Hi' },
    { id: 5, message: 'How are you?' }
  ],

  dialogData: [
    { id: 1, name: 'User1' },
    { id: 2, name: 'User2' },
    { id: 3, name: 'User3' },
    { id: 4, name: 'User4' },
    { id: 5, name: 'User5' },
  ],
}


export const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messageData: [
          ...state.messageData,
          { id: Math.floor(Math.random() * 10), message: body }
        ]
      };

    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })
