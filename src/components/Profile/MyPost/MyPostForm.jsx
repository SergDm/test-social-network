import React from 'react';
import { Field, reduxForm } from "redux-form"
import { required, maxLengthCreator } from '../../../utility/validators/validator';
import { Textarea } from '../../commonn/FormsControls/FormsControls';

const maxLength150 =  maxLengthCreator(150)

const AddNewPostForm = (props) => {
  
  return (
    <fieldset>
    <legend align="center">Post</legend>
    <form onSubmit={props.handleSubmit}>
      <Field component= {Textarea}  name='newPostText' placeholder='Enter your message' validate={[required, maxLength150]} />
        <div>
          <button>Add post</button>
        </div>
    </form>
    </fieldset>
  )
}

export const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)