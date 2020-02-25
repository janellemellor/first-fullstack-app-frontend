import React, { Component } from 'react'
import { getBobaData, getTypesData, postBobaData } from './bobaAPI.js';

export default class CreateBoba extends Component {
    state = {
        types: [],
        milkTea: true,
        type: 1,
    };

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
                    <form onSubmit={this.props.handleSubmit}>
                        <label>
                            Flavor:
                            <input>
                            </input>
                        </label>

                        <label>
                            Type:
                            <input>
                            </input>
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
