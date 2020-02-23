import React, { Component } from 'react'

export default class Boba extends Component {
    render() {
        const { boba } = this.props;
        const {
            flavor, 
            type, 
            url, 
        } = boba;

        return (
            <li>
                <h3>{ flavor }</h3>
                <img src ={ url } alt='boba tea icon'></img>
                <p>type: { type } </p>
            </li>
            
        )
    }
}
