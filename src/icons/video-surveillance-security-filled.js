import React from 'react';
import PropTypes from 'prop-types';

const VideoSurveillanceSecurityFilled = props => {
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
        d="M20.667 7.972a1.344 1.344 0 01.974 1.644l-.364 1.434a1.357 1.357 0 01-1.647.98l-.736-.187-.056.216a1.452 1.452 0 01-1.774 1.056L11.86 11.79l-2.294 6.501a.617.617 0 01-.58.41H5.972v1.548a1.46 1.46 0 01-1.46 1.463H3.46A1.46 1.46 0 012 20.252v-5.316c0-.804.655-1.46 1.46-1.46h1.058c.807 0 1.46.656 1.46 1.462v2.535h2.58l2.111-5.986-5.935-1.51A1.466 1.466 0 013.678 8.2l1.288-5.07v-.006a1.459 1.459 0 011.773-1.05l12.34 3.14c.377.095.694.333.893.67.199.336.255.728.16 1.106l-.202.795.737.188zm-.732 2.866a.124.124 0 00.152-.09l.364-1.431a.122.122 0 00-.09-.149l-.736-.188-.426 1.67.736.188z"
      ></path>
    </svg>
  );
};

VideoSurveillanceSecurityFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

VideoSurveillanceSecurityFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default VideoSurveillanceSecurityFilled;
