import React from 'react';
import PropTypes from 'prop-types';

const LocationFilled = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.28 9.042c.011-4.398-2.585-7.028-6.952-7.042h-.034c-2.143 0-3.907.633-5.106 1.835C5.98 5.042 5.339 6.829 5.333 9c-.01 4.322 5.3 11.202 6.659 12.569a.405.405 0 00.577 0c1.364-1.373 6.697-8.247 6.711-12.527zm-6.93-2.944c1.563 0 2.499.933 2.499 2.499 0 1.565-.933 2.498-2.499 2.498-1.563 0-2.498-.933-2.498-2.498 0-1.563.935-2.499 2.498-2.499z"
      ></path>
    </svg>
  );
};

LocationFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LocationFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LocationFilled;
