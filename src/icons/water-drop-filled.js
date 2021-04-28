import React from 'react';
import PropTypes from 'prop-types';

const WaterDropFilled = props => {
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
      <path d="M12.569 2.12a.407.407 0 00-.575-.002l-.002.002c-1.359 1.367-6.673 8.247-6.659 12.569.006 2.174.647 3.958 1.852 5.165 1.199 1.2 2.966 1.835 5.106 1.835h.034c4.367-.014 6.963-2.644 6.95-7.042-.009-4.28-5.345-11.157-6.706-12.527z"></path>
    </svg>
  );
};

WaterDropFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

WaterDropFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default WaterDropFilled;
