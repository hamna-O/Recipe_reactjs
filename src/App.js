import React, { Component } from 'react'
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import {recipes} from './tempList';

export default class App extends Component {
    state = {
        recipes: recipes,
        url:"https://www.food2fork.com/api/search?key=3b2ad4ccd2ef9149b8dc549920eb80cf",
        details_id: 35386
    }

    // async getRecipes() {
    //     try {
    //         const data = await fetch(this.state.url);
    //         const jsonData = await data.json();
    //         this.setState({
    //         recipes: jsonData.recipes
    //     })
    //     } catch (error) {
    //         console.log(error);
    //     }
        
    // }

    // componentDidMount() {
    //     this.getRecipes();
    // }

    render() {
        // console.log(this.state.recipes);
        return (
            <React.Fragment>
                {/* <RecipeList recipe={this.state.recipes}></RecipeList> */}
                <RecipeDetails id={this.state.details_id}></RecipeDetails>
            </React.Fragment>
        )
    }
}
