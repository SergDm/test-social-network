import React, { Component } from 'react'
import Layout from './Layout'
import Questions from './containers/Questions'

class Quiz extends Component {
    render() {
        return (
            <Layout>
                <Questions />
            </Layout>
        )
    }
}

export default Quiz