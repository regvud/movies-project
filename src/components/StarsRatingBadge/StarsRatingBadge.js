import React, {useState} from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRatingBadge = ({vote_average}) => {
    const [rating, setRating] = useState(0)
    return (
        <div>
            <StarRatings
                rating={vote_average * 0.5}
                // rating={vote_average}
                starRatedColor="blue"
                changeRating={setRating}
                numberOfStars={5}
                name='rating'
            />
        </div>
    );
};

export default StarsRatingBadge;