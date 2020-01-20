import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = (props) => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total += 1
        }
        return total
    }, 0)

    return (
        <div className={classes.finished}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            
                            <i className={props.results[quizItem.id] === 'error' 
                            ? 'fa fa-times' 
                            : 'fa fa-check'} />
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