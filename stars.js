 //Stars – a one to five-star rating component that allows users to rate something 
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    //const [hover, setHover] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = ++i;

                return (
                    <label>
                        
                    <FaStar 
                        className="star" 
                        color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} 
                        size={25}
                        onClick={() => setRating(ratingValue)}
                         />
                    
                 </label>
             );
         })}
        </div>
     );
 };

 export default StarRating