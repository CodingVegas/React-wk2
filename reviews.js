//Review – A text review a user can leave on a movie.
import React from 'react';

export default class Reviews extends React.Component{
    render(){
        return(//this is the JSX version
            <div className="card w-50">
                <div className=" text-white">
                    <h6>{this.props.user}</h6>
                </div>
                <div className='card-body'>
                    <p>{this.props.comment} </p> 
                </div>
             </div>
        );
    }
}
