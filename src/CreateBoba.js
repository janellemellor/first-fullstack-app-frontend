import React, { Component } from 'react'
import { getTypesData, postBobaData } from './bobaAPI.js';

export default class CreateBoba extends Component {
    render() {
        return (        
            <fieldset>   
                <legend>
                    <h3>Create your own Boba!</h3>
                    <form>
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
