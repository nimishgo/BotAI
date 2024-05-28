/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function StarRating({ rating, onRating }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex pl-20">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            key={index}
            type="button"
            className="focus:outline-none"
            onClick={() => onRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          >
            {ratingValue <= (hover || rating) ? (
              <FaStar className="text-yellow-500 w-4 h-4" />
            ) : (
              <FaRegStar className="text-yellow-500 w-4 h-4" />
            )}
          </button>
        );
      })}
    </div>
  );
}
