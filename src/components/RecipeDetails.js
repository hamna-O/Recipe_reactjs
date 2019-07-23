import React, { Component } from 'react';
import {recipe} from './../tempDetails';
export default class RecipeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: recipe,
            url: `https://www.food2fork.com/api/get?key=3b2ad4ccd2ef9149b8dc549920eb80cf&rId=${this.props.id}`
        }
    }

    
    async componentDidMount() {
            try {
                const data = await fetch(this.state.url);
                const jsonData = await data.json();
                this.setState({
                recipe: jsonData.recipe
            })
            } catch (error) {
                console.log(error);
            }
        }

    render() {

        const {
            f2f_url,
            image_url,
            ingredients,
            publisher,
            publisher_url,
            source_url,
            title
        } = this.state.recipe;
        return (
           <React.Fragment>
              <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <button type="button" className="btn btn-warning mb-5 text-capitalize">
                            back to recipe list
                        </button>
                        <img src={image_url} className="d-block w-100" alt="recipe"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                       <h6 className="text-uppercase">{title}</h6>
                       <h6 className="text-capitalize text-slanted text-warning">Provided by {publisher}</h6>
                       <a href={publisher_url} target="_blank" className="btn btn-primary mx-2 text-capitalize">Publisher Webpage</a>
                       <a href={source_url} target="_blank" className="btn btn-success mx-2 text-capitalize">recipe url</a>
                       <ul className="list-group mt-4">
                           <h2 className="mt-3 mb-4">Ingredients</h2>
                           {
                           ingredients.map((item, index)=> {
                               return <li key={index} className="list-group-item text-slanted">{item}</li>
                           })
                       }
                       </ul>
                       
                    </div>
              </div>
           </React.Fragment>
        )
    }
}
