import React, { Component } from 'react'
import classes from './Questions.module.css'
import ActivQuestion from '../component/ActivQuestions/ActivQuestion'
import quiz from '../../BaseCode'
import FinishedQuiz from '../component/FinishedQuiz/FinishedQuiz'

class Questions extends Component {
    state = {
        results: {},
        isFinished: false,
        activQuest: 0,
        answerState: null,
        quiz
    }

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activQuest]

        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: { [answerId]: 'success' },
                results: results
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activQuest: this.state.activQuest + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results: results
            })
        }
    }

    isQuizFinished() {
        return this.state.activQuest + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activQuest: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className={classes.questions}>
                <div className={classes.questionsWrapper}>
                    <h1>Answer all questions</h1>
                    
                    {this.state.isFinished
                        ? <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                        />
                        : <ActivQuestion
                            answers={this.state.quiz[this.state.activQuest].answers}
                            question={this.state.quiz[this.state.activQuest].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activQuest + 1}
                            state={this.state.answerState}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default Questions