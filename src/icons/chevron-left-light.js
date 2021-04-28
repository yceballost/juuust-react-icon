import React from 'react';
import PropTypes from 'prop-types';

const ChevronLeftLight = props => {
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
      <path d="M16.32 20a.7.7 0 01-.45-.16l-8.658-7.314a.577.577 0 010-.897l8.659-7.451a.71.71 0 01.939 0 .595.595 0 010 .872l-8.171 7.02 8.132 6.862a.584.584 0 01.005.868l-.005.004a.727.727 0 01-.451.196z"></path>
    </svg>
  );
};

ChevronLeftLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChevronLeftLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ChevronLeftLight;
