import React, { Component } from 'react'
import Boba from './Boba.js';
import request from 'superagent';

export default class Detail extends Component {
    state = { boba: {} }

    async componentDidMount() {
        const getBobaData = await request.get(` https://cryptic-hamlet-62196.herokuapp.com/api/boba`);

        this.setState({ boba: getBobaData.body })
    }


    render() {
        const { boba } = this.state;
        return (
            <div>
                <Boba boba={ boba } />
            </div>
        )
    }
}
