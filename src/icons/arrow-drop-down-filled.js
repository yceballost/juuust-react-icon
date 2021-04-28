import React from 'react';
import PropTypes from 'prop-types';

const ArrowDropDownFilled = props => {
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
      <path d="M21.753 7.863a1.304 1.304 0 00-1.182-.711L3.447 7c-.523-.01-1 .27-1.196.698a1.03 1.03 0 00.275 1.24l8.56 7.575a1.407 1.407 0 001.815 0l8.56-7.423c.356-.3.474-.798.292-1.227z"></path>
    </svg>
  );
};

ArrowDropDownFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDropDownFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDropDownFilled;
