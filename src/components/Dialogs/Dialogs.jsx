import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { AddMessageFormRedux } from './DialogsForm';


const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElement = state.dialogData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

  let messagesElement = state.messageData.map(mes => <Message message={mes.message} key={mes.id} />);
  
  let addNewMessage = (value) => {
      props.sendMessage(value.newMessageBody)
  }

  return !props.isAuth ? <Redirect to={'/login'} /> :
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        {dialogsElement}
      </div>
      <div className={classes.messages}>
        <div>{messagesElement}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
}


export default Dialogs;