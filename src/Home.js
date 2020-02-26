import React, { Component } from 'react'
import Boba from './Boba.js';
import { Link } from 'react-router-dom';
import { getBobaData } from './bobaAPI.js'; 


export default class Home extends Component {
    state = {
        bobaData: [],
    }

    async componentDidMount() {
        const bobaInfo = await getBobaData();
        
        this.setState({ bobaData: bobaInfo.body})
    }

    render() {
        return (
            <div>
                <header> Mo' Boba 
                </header>
                <main>
                    <ul>
                        {this.state.bobaData.map(boba => 
                            <Link key={boba.bobas_id} to={`/detail/${boba.flavor}`}>
                            <Boba boba={boba} />
                            </Link>
                            )}
                    </ul>
                    
                </main>
            </div>
        )
    }
}
