import React from 'react';
import { Field, reduxForm } from "redux-form"
import { Textarea } from '../commonn/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utility/validators/validator';
import Button from '../commonn/Button/Button';

const maxLength150 = maxLengthCreator(150)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newMessageBody' placeholder='Enter your message' validate={[required, maxLength150]} />
      </div>
      <div>
        <Button name='Send message' />
      </div>
    </form>
  )
}

export const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)