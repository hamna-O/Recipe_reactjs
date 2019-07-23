import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        const {
            recipe_id,
            image_url,
            title,
            publisher,
            source_url
        } = this.props.recipe;

        return (
            <React.Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-3 my-3">
                    <div className="card">
                    <img className="card-img-top" src={image_url} style={{height:"14rem"}} alt="Card image cap" />
                    <div className="card-body text-capitalize">
                        <h6 className="card-title">{title}</h6>
                        <h6 className="text-warning text-slanted">Provided by {publisher}</h6>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary text-capitalize">Details</button>
                        <a href={source_url} target="_blank" className="btn btn-success text-capitalize mx-2">recipe url</a>
                    </div>
                    </div>
                    
                </div>
            
            </React.Fragment>
        )
    }
}
