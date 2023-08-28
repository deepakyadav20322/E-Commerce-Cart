import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai'

const StarRating = ({ rating,review }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar color='#FDCC0D' key={i} />);
    } else if (hasHalfStar && i === Math.ceil(rating)) {
      stars.push(<FaStarHalfAlt color='#FDCC0D' key={i} />);
    } else {
      stars.push(<FaStar color='#FDCC0D' key={i} />);
    }
  }

  return <div className="star-rating flex flex-row my-2">{stars} <span className='text-[12px]'>&nbsp;&nbsp;( {review} customer reviews )</span></div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired, // rating prop is required and should be a number
};

export default StarRating;
