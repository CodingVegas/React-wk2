//ReviewForm – a form at the bottom of a Movie component that allows users to leave 
//reviews. When submitted, the review should be added to the movie. All this data can be stored 
//in an array, no networking or database needed for this assignment
import React from 'react';

export default class ReviewForm extends React.Component{
    render (){
        return <div className="container">       
        <form>  
            <div className="form-group"> 
                <label>Name</label> <br></br>
                    <input type="text" className="form-control" id="user" placeholder="Name"></input>
                    <label>Review</label> <br></br>
                    <input type="text" className="form-control" id="comment" placeholder="Your review here"></input>  
            </div>
                      
                <button type="submit" className="btn btn-primary">Submit</button> 
        </form>  
    </div>  
    }
}
