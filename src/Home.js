import React, { Component } from 'react'
import request from 'superagent';
import Boba from './Boba.js';
import { Link } from 'react-router-dom'; 

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
            <div>
                <header> Mo' Boba 
                </header>
                <main>
                    <ul>
                        {this.state.bobaData.map(boba => 
                            <Link key={boba.id} to={`/detail/${boba.bobaData}`}>
                            <Boba boba={boba} />
                            </Link>
                            )}
                    </ul>
                    
                </main>
            </div>
        )
    }
}
