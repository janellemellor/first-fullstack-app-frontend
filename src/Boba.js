import React, { Component } from 'react'

export default class Boba extends Component {
    render() {
        const { boba } = this.props;
        const {
            flavor, 
            type, 
            is_milk_tea, 
            url, 
            star_rating,
        } = boba;

        return (
            <li>
                <h3>{ flavor }</h3>
            </li>
            
        )
    }
}
