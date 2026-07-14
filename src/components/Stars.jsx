import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Stars = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar color="gold" />
        ) : stars >= number ? (
          <FaStarHalfAlt color="gold" />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return <>{ratingStar}</>;
};

export default Stars;
