import React, { Component } from 'react'
import RecipeSearch from './RecipeSearch';
import Recipe from './Recipe';
import { recipe } from '../tempDetails';

export default class RecipeList extends Component {
    render() {
        const {recipe} = this.props;
        return (
            <React.Fragment>
                <RecipeSearch></RecipeSearch>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase">
                            <h1 className="text-slanted">
                                Recipe List
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        {
                            recipe.map(recipe => {
                                return <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>;
                            })
                        }
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
