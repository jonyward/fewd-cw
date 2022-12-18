import React, {useState} from "react";
import { FaStar} from "react-icons/fa";

const StarComponent = () => {
    const [rating, setRating] = useState(null);

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