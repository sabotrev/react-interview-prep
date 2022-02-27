import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ isOn }) => {
    return <FaStar size={50} color={isOn ? 'orange' : 'lightgray'} />;
};

const StarRating = () => {
    const [hoverIndex, setHoverIndex] = useState(0);
    const [ratingIndex, setRatingIndex] = useState(0);

    return (
        <div className="start-rating">
            {[...Array(5)].map((star, index) => {
                index++;
                return (
                    <span
                        key={index}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(ratingIndex)}
                        onClick={() => setRatingIndex(index)}
                    >
                        <Star isOn={index <= (hoverIndex || ratingIndex)} />
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
