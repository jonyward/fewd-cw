import React, {useState} from "react";
import { FaStar} from "react-icons/fa";

const StarComponent = () => {
    const [rating, setRating] = useState(null);

    // Test component for rating system for each recipe.
    // was optimistic this would work but decided to keep in application to demonstrate at least an attempt at some sort of rating for each recipe.
    // component does work however stays in the same state across all recipes, where it should have an individual state for each individual recipe that is saved.
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