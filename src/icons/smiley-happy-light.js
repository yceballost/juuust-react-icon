import React from 'react';
import PropTypes from 'prop-types';

const SmileyHappyLight = props => {
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
        d="M21.843 12.002c0-6.706-3.628-9.846-9.846-9.846-6.219 0-9.84 3.14-9.84 9.846 0 6.706 3.621 9.84 9.84 9.84 6.218 0 9.846-3.134 9.846-9.84zm-9.846 9.02c5.988 0 9.025-3.034 9.025-9.02 0-5.989-3.037-9.025-9.025-9.025-5.986 0-9.02 3.036-9.02 9.025 0 5.986 3.034 9.02 9.02 9.02zm5.31-7.115a.411.411 0 01.611.549c-.09.098-2.207 2.406-5.854 2.448-.05.003-.101.003-.151.003-.726 0-3.799-.14-5.832-2.415a.412.412 0 01.613-.546c2.017 2.258 5.314 2.143 5.347 2.137 3.23-.035 5.18-2.085 5.264-2.173l.003-.003zm-8.294-3.462c-.327 0-.6-.101-.787-.292-.185-.187-.277-.448-.277-.775 0-.667.398-1.068 1.064-1.068.667 0 1.065.4 1.065 1.068 0 .327-.093.585-.277.775-.188.19-.46.292-.788.292zm5.185-.292c.188.19.46.292.787.292.328 0 .6-.101.788-.292.184-.19.277-.448.277-.775 0-.667-.398-1.068-1.065-1.068-.666 0-1.064.4-1.064 1.068 0 .327.092.588.277.775z"
      ></path>
    </svg>
  );
};

SmileyHappyLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SmileyHappyLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SmileyHappyLight;
