import React from 'react';
import PropTypes from 'prop-types';

const DolarSymbolFilled = props => {
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
        d="M15.123 11.174a4.218 4.218 0 012.306 3.12 4.99 4.99 0 01-1.292 4.205 5.119 5.119 0 01-2.703 1.523v.379c0 .694-.53 1.257-1.185 1.257-.658 0-1.187-.563-1.187-1.258v-.333a8.299 8.299 0 01-3.55-1.512c-.537-.398-.669-1.18-.294-1.751a1.141 1.141 0 011.653-.31 6.05 6.05 0 002.188 1.021v-4.68c-.961-.194-1.933-.544-2.742-1.437-.804-.883-1.174-2.067-1.04-3.328.157-1.457.98-2.866 2.154-3.678a4.932 4.932 0 011.63-.725v-.41c0-.694.533-1.257 1.188-1.257.656 0 1.185.563 1.185 1.258v.344c1.132.202 2.19.7 3.07 1.443a1.31 1.31 0 01.171 1.77c-.016.024-.037.048-.055.069l-.004.004a1.14 1.14 0 01-1.608.106 4.141 4.141 0 00-1.571-.826v4.493c.566.1 1.134.24 1.686.513zm-5.09-1.521c-.313-.345-.445-.785-.392-1.303.079-.717.507-1.448 1.096-1.854.083-.058.173-.102.263-.146l.067-.033v3.935c-.412-.12-.762-.3-1.033-.6zm4.42 7.078a2.756 2.756 0 01-1.016.672v-4.165c.244.059.485.118.686.219.675.333.897.88.967 1.28.12.683-.126 1.448-.636 1.994z"
      ></path>
    </svg>
  );
};

DolarSymbolFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DolarSymbolFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DolarSymbolFilled;
