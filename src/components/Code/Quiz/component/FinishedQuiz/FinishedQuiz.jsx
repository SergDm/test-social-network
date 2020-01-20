import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = (props) => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)

    return (
        <div className={classes.finished}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ]
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.id}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                })}
            </ul>
            <b>Правильно {successCount} из {props.quiz.length}</b>
            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz