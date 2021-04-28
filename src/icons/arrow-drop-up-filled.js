import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropUpFilled = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M21.481 14.91L12.91 7.336a1.41 1.41 0 00-1.818 0L2.523 14.76a1.044 1.044 0 00-.28 1.23c.196.423.656.703 1.174.709l17.137.15c.521 0 .986-.274 1.185-.7a1.041 1.041 0 00-.275-1.238h.017z"></path>
    </svg>
  );
};

ArrowDropUpFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDropUpFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDropUpFilled;
