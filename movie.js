//Movie – a component that represents movie data (i.e. image, synopsis, rating, etc…)import React from 'react';
import React from 'react';
import StarRating from './stars';
import ReviewForm from './review-form';
import Reviews from './reviews';

export default class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reviews: props.reviews,
            name: props.title,
            name: props.description,
            name: props.img,
            name: props.StarRating
        };
    }
        render () {
        let reviews;

        if(this.state.reviews){
            reviews = this.state.reviews.map((review, index) => <Reviews key={index} {...review}/>);
        }
        
            return (
                <div className="Card">       
                    <div className="card-body">
                        <h2 className="movie-title">{this.props.title}</h2>
                        <img className="movie-image" src={this.props.image} alt={this.props.altimage}/>
                        <p id="description">{this.props.description}</p>
                        {reviews}
                    </div>
                    <div className="card-footer">   
                        <StarRating />
                        <ReviewForm />
                    </div>
                </div>  
        );  
    };
}