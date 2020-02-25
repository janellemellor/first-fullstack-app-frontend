import React, { Component } from 'react'
import Boba from './Boba.js';
import { getBobaData } from './bobaAPI.js';

export default class Detail extends Component {
    state = { eachBoba: {} }

    async componentDidMount() {
        //check the end of params - bobaId may be weird
        const  eachBobaItem = await getBobaData(this.props.match.params.bobaId);

        this.setState({ eachBoba: eachBobaItem.body[0]})
    }


    render() {
        const { eachBoba } = this.state;
        return (
            <div>
                <Boba boba={ eachBoba } />
            </div>
        )
    }
}
