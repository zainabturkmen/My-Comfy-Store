import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    //   index 0 - 4
    const number = index + 0.5;
    return (
      <span>
        {stars >= index + "1" ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <>
      <div className="stars">{tempStars}</div>
      <span>({`${reviews} Customers reviews`})</span>
    </>
  );
};

export default Stars;
