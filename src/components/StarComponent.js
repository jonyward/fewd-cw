import React, {useState} from "react";
import { FaStar} from "react-icons/fa";

const StarComponent = () => {
    const [rating, setRating] = useState("");

// attemt at a rating functionality for the application. had difficulties with this component as the state would save when interacted with however the state would be
// identical across all recipes where instead this component needed to have an individual state for each recipe
// kept in the application simply to show an attempt at a rating system was made

    return (
    <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
                <label>
                <input 
                type="radio" 
                name="rating" 
                value="ratingValue" 
                onClick={() => setRating(ratingValue)}/>
                <FaStar 
                className="star" 
                color={ratingValue <= rating ? "#ffc107" :""} 
                size={25} 
                />
                </label>
            );
        })}
        <br></br><br></br>
    </div>
    );
};

export default StarComponent;