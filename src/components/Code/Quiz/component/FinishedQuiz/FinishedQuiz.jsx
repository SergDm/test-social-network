import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = (props) => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total += 1
        }
        return total
    }, 0)

    const finishResult = props.quiz.map((quizItem, index) => {
        const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[props.results[quizItem.id]]
        ]
        return (
            <div key={index}>
                <div className={classes.question}>
                    <h2>{index + 1}</h2>
                    {quizItem.question}
                </div>
                <div className={classes.answer}>
                    <i className={cls.join(' ')} />
                </div>
            </div>
        )
    })

    return (
        <div className={classes.finished}>
            {finishResult}
            <b>Correct answers {successCount} of {props.quiz.length}</b>
            <button onClick={props.onRetry}>RETRY</button>

        </div>
    )
}

export default FinishedQuiz