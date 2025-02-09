import React from 'react';
import PropTypes from 'prop-types';

const SmileySadLight = props => {
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
        d="M21.843 12.002c0-6.706-3.628-9.846-9.846-9.846-6.219 0-9.84 3.14-9.84 9.846 0 6.706 3.621 9.84 9.84 9.84 6.218 0 9.846-3.134 9.846-9.84zm-9.846 9.02c5.988 0 9.025-3.034 9.025-9.02 0-5.989-3.037-9.025-9.025-9.025-5.986 0-9.02 3.036-9.02 9.025 0 5.986 3.034 9.02 9.02 9.02zm.08-7.25c3.634.04 5.751 2.35 5.841 2.449a.41.41 0 01-.61.549l-.003-.003c-.084-.088-2.033-2.138-5.25-2.174a.44.44 0 01-.017 0c-.264-.002-3.408-.028-5.344 2.137a.411.411 0 01-.613-.546c2.184-2.443 5.577-2.415 5.965-2.412h.032zm-3.064-3.327c-.327 0-.6-.101-.787-.292-.185-.187-.277-.448-.277-.775 0-.67.398-1.068 1.064-1.068.667 0 1.065.4 1.065 1.068 0 .327-.093.588-.277.775-.188.19-.46.292-.788.292zm5.185-.292c.188.19.46.292.787.292.328 0 .6-.101.788-.292.184-.187.277-.448.277-.775 0-.667-.398-1.068-1.065-1.068-.666 0-1.064.398-1.064 1.068 0 .327.092.588.277.775z"
      ></path>
    </svg>
  );
};

SmileySadLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SmileySadLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SmileySadLight;
