import React, { Component } from 'react'
import request from 'superagent';
import Boba from './Boba.js';

export default class Home extends Component {
    state = {
        bobaData: [],
    }

    async componentDidMount() {
        const getBobaData = await request.get(` https://cryptic-hamlet-62196.herokuapp.com/api/boba`)
        
        this.setState({ bobaData: getBobaData.body })
    }

    render() {
        return (
            <main>
                <ul>
                    {this.state.bobaData.map(boba => 
                        <Boba boba={boba} />
                        )}
                </ul>
                
            </main>
        )
    }
}
