import React, { Component } from 'react'
import { getTypesData } from './bobaAPI.js';
import request from 'superagent';

export default class CreateBoba extends Component {
    state = {
        types: [],
        milkTea: true,
        type: 1,
        flavor: '',
        image: '',
        star_rating: 0
    };

    componentDidMount = async() => {
        const types = await getTypesData();

        this.setState({ types: types.body });
    }

    handleFlavorChange = (e) => {
        this.setState({ flavor: e.target.value })
    }

    handleTypeChange = (e) => {
        this.setState({ type: Number(e.target.value) })
    }

    handleMilkTeaChange = (e) => {
        const boolean = e.target.value === 'true'
        ? true
        : false

        this.setState({ milkTea: boolean })
    }

    handleImageChange = (e) => {
        this.setState({ image: e.target.value })
    }

    handleStarRatingChange = (e) => {
        this.setState({ star_rating: Number(e.target.value)}) 
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        const newBoba = {
            flavor: this.state.flavor,
            is_milk_tea: this.state.milkTea, 
            type_id: this.state.type,
            image: this.state.image, 
            star_rating: this.state.star_rating,
        } 

    
        const createNewBoba = await request.post(`https://cryptic-hamlet-62196.herokuapp.com/api/boba`, newBoba)

        console.log(createNewBoba);

        this.props.history.push('/');
        
    }



    render() {
        return (        
            <fieldset>   
                <legend>
                    <h3>Create your own Boba!</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Flavor:
                            <input value={ this.state.flavor } onChange={this.handleFlavorChange} />
                          
                        </label>

                        <label>
                            Type:
                            <select onChange={ this.handleTypeChange }> 
                                { this.state.types.map(type => <option value={type.id}>
                                {type.type}    
                                </option>)} 
                            </select>
                        </label>

                        <label>
                            Is Milk Tea?
                            <select value={ this.state.isMilkTea } onChange={this.handleMilkTeaChange }>
                                <option value="true" >True</option>
                                <option value="false" >false</option>
                            </select>
                        </label>

                        <label>
                            Image:
                            <input onChange={ this.handleImageChange } value={ this.state.image } />
                        </label>

                        <label>
                            Star Rating
                            <input onChange={ this.handleStarRatingChange } value={ this.state.star_rating } />
                        </label>

                        <button>Create!</button>
                    </form>
                </legend>
            </fieldset>     
        )
    }
}
