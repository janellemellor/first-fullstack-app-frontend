import React, { Component } from 'react'

export default class Boba extends Component {
    render() {
        const { boba } = this.props;
        const {
            flavor, 
            type, 
            image, 
            star_rating,
        } = boba;

        return (
            <li>
                <h3>{ flavor }</h3>
                <img src ={ image } alt={ boba.flavor }></img>
                <p>type: { type } </p>
                <p>star rating: { star_rating }</p>
            </li>
            
        )
    }
}
