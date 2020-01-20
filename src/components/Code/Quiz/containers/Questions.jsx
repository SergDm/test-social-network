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
                rightAnswerId: 1,
                id: 1,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
                ]
            },
            {
                rightAnswerId: 1,
                id: 2,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
                ]
            },
            {
                rightAnswerId: 1,
                id: 3,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
                ]
            },
            {
                rightAnswerId: 1,
                id: 4,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
                ]
            },
            {
                rightAnswerId: 1,
                id: 5,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
                ]
            },
            {
                rightAnswerId: 1,
                id: 6,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
                ]
            },
            {
                rightAnswerId: 1,
                id: 7,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
                ]
            },
            {
                rightAnswerId: 1,
                id: 8,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
                ]
            },
            {
                rightAnswerId: 1,
                id: 9,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
                ]
            },
            {
                rightAnswerId: 1,
                id: 10,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
                ]
            },
            {
                rightAnswerId: 1,
                id: 11,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
                ]
            },
            {
                rightAnswerId: 1,
                id: 12,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
                ]
            },
            {
                rightAnswerId: 1,
                id: 13,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
                ]
            },
            {
                rightAnswerId: 1,
                id: 14,
                answers: [
                    { text: 'Сортировка вставками', id: 1 },
                    { text: 'Алгоритм Эвклида', id: 2 },
                    { text: 'Сортировка пузырьком', id: 3 },
                    { text: 'Сортировка выбором', id: 4 },
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
            if (!results[answerId]) {
                results[answerId] = 'success'
            }

            this.setState({
                answerState: { [answerId]: 'success' },
                results
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
            results[answerId] = 'error'
            this.setState({
                answerState: {
                    [answerId]: 'error'},
                results
            })
        }
    }

    isQuizFinished() {
        return this.state.activQuest + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className={classes.questions}>
                <div className={classes.questionsWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {this.state.isFinished
                        ? <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                        />
                        : <ActivQuestion
                            answers={this.state.quiz[this.state.activQuest].answers}
                            question={baseCode[this.state.activQuest].code}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={baseCode.length}
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