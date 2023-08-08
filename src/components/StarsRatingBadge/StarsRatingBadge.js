import React, {useState} from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRatingBadge = ({vote_average}) => {
    return (
        <div>
            <StarRatings
                rating={vote_average * 0.5}
                starRatedColor="blue"
                numberOfStars={5}
                name='rating'
            />
        </div>
    );
};

export default StarsRatingBadge;