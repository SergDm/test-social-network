import React, { Component } from 'react'
import classes from './Questions.module.css'
import ActivQuestion from '../component/ActivQuestions/ActivQuestion'
import baseCode from '../../BaseCode'
import FinishedQuiz from '../component/FinishedQuiz/FinishedQuiz'

class Questions extends Component {
    state = {
        results: {},
        isFinished: false,
        activQuest: 0,
        answerState: null,
        quiz: [
            {
                question: baseCode[0].code,
                rightAnswerId: 2,
                id: 1,
                answers: [
                    { text: baseCode[2].title, id: 1 },
                    { text: baseCode[0].title, id: 2 },
                    { text: baseCode[4].title, id: 3 },
                    { text: baseCode[6].title, id: 4 },
                ]
            },
            {
                question: baseCode[1].code,
                rightAnswerId: 3,
                id: 2,
                answers: [
                    { text: baseCode[11].title, id: 1 },
                    { text: baseCode[13].title, id: 2 },
                    { text: baseCode[1].title, id: 3 },
                    { text: baseCode[2].title, id: 4 },
                ]
            },
            {
                question: baseCode[2].code,
                rightAnswerId: 1,
                id: 3,
                answers: [
                    { text: baseCode[2].title, id: 1 },
                    { text: baseCode[10].title, id: 2 },
                    { text: baseCode[1].title, id: 3 },
                    { text: baseCode[0].title, id: 4 },
                ]
            },
            {
                question: baseCode[3].code,
                rightAnswerId: 4,
                id: 4,
                answers: [
                    { text: baseCode[10].title, id: 1 },
                    { text: baseCode[11].title, id: 2 },
                    { text: baseCode[12].title, id: 3 },
                    { text: baseCode[3].title, id: 4 },
                ]
            },
            {
                question: baseCode[4].code,
                rightAnswerId: 3,
                id: 5,
                answers: [
                    { text: baseCode[2].title, id: 1 },
                    { text: baseCode[1].title, id: 2 },
                    { text: baseCode[4].title, id: 3 },
                    { text: baseCode[5].title, id: 4 },
                ]
            },
            {
                question: baseCode[5].code,
                rightAnswerId: 1,
                id: 6,
                answers: [
                    { text: baseCode[5].title, id: 1 },
                    { text: baseCode[10].title, id: 2 },
                    { text: baseCode[6].title, id: 3 },
                    { text: baseCode[7].title, id: 4 },
                ]
            },
            {
                question: baseCode[6].code,
                rightAnswerId: 4,
                id: 7,
                answers: [
                    { text: baseCode[1].title, id: 1 },
                    { text: baseCode[10].title, id: 2 },
                    { text: baseCode[11].title, id: 3 },
                    { text: baseCode[6].title, id: 4 },
                ]
            },
            {
                question: baseCode[7].code,
                rightAnswerId: 1,
                id: 8,
                answers: [
                    { text: baseCode[7].title, id: 1 },
                    { text: baseCode[3].title, id: 2 },
                    { text: baseCode[5].title, id: 3 },
                    { text: baseCode[4].title, id: 4 },
                ]
            },
            {
                question: baseCode[8].code,
                rightAnswerId: 2,
                id: 9,
                answers: [
                    { text: baseCode[1].title, id: 1 },
                    { text: baseCode[8].title, id: 2 },
                    { text: baseCode[6].title, id: 3 },
                    { text: baseCode[5].title, id: 4 },
                ]
            },
            {
                question: baseCode[9].code,
                rightAnswerId: 2,
                id: 10,
                answers: [
                    { text: baseCode[10].title, id: 1 },
                    { text: baseCode[9].title, id: 2 },
                    { text: baseCode[8].title, id: 3 },
                    { text: baseCode[6].title, id: 4 },
                ]
            },
            {
                question: baseCode[10].code,
                rightAnswerId: 3,
                id: 11,
                answers: [
                    { text: baseCode[1].title, id: 1 },
                    { text: baseCode[3].title, id: 2 },
                    { text: baseCode[10].title, id: 3 },
                    { text: baseCode[5].title, id: 4 },
                ]
            },
            {
                question: baseCode[11].code,
                rightAnswerId: 2,
                id: 12,
                answers: [
                    { text: baseCode[1].title, id: 1 },
                    { text: baseCode[11].title, id: 2 },
                    { text: baseCode[3].title, id: 3 },
                    { text: baseCode[6].title, id: 4 },
                ]
            },
            {
                question: baseCode[12].code,
                rightAnswerId: 1,
                id: 13,
                answers: [
                    { text: baseCode[12].title, id: 1 },
                    { text: baseCode[13].title, id: 2 },
                    { text: baseCode[8].title, id: 3 },
                    { text: baseCode[7].title, id: 4 },
                ]
            },
            {
                question: baseCode[13].code,
                rightAnswerId: 3,
                id: 14,
                answers: [
                    { text: baseCode[1].title, id: 1 },
                    { text: baseCode[7].title, id: 2 },
                    { text: baseCode[13].title, id: 3 },
                    { text: baseCode[10].title, id: 4 },
                ]
            },
        ]
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