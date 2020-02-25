import React, { Component } from 'react'
import { getBobaData, getTypesData, postBobaData } from './bobaAPI.js';

export default class CreateBoba extends Component {
    state = {
        types: [],
        milkTea: true,
        type: 1,
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



    handleSubmit = async (e) => {
        e.preventDefault();

        const newBoba = {
            flavor: this.state.flavor,
            isMilkTea: this.state.milkTea, 
            typeId: this.state.type_id,
            image: this.state.image, 
            stars: this.state.star_rating
        } 

        const createNewCat = await postBobaData(newBoba);

        console.log(createNewCat);

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
                            <input>
                            </input>
                        </label>

                        <label>
                            Image:
                            <input>
                            </input>
                        </label>

                        <label>
                            Star Rating
                            <input>
                            </input>
                        </label>

                        <button>Create!</button>

                    </form>
                </legend>
            </fieldset>     
        )
    }
}
