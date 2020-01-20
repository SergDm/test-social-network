import React from 'react'
import classes from './ActivQuestion.module.css'
import AnswersList from './AnswersList/AnswersList'

const ActivQuestion = (props) => {
    return (
        <div className={classes.activWrapper}>
            <div className={classes.activ}>
                <b className={classes.quest}>
                    <div style={{ textAlign: 'right' }}>{props.answerNumber} из {props.quizLength}</div>
                    <span>
                        <strong>{props.answerNumber}.</strong>&nbsp;
                    {props.question}
                    </span>
                </b>
            </div>
            <div className={classes.activQuestions}><AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
                state={props.state}
            /></div>
        </div>
    )
}

export default ActivQuestion