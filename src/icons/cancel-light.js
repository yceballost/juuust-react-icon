import React from 'react';
import PropTypes from 'prop-types';

const CancelLight = props => {
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
        d="M24 12.003C24 3.828 19.578 0 11.997 0 4.415 0 0 3.828 0 12.003 0 20.18 4.415 24 11.997 24 19.577 24 24 20.179 24 12.003zM11.997 23c7.3 0 11.002-3.698 11.002-10.996 0-7.3-3.701-11.002-11.002-11.002C4.699 1 1 4.702 1 12.003 1 19.301 4.699 23 11.997 23zm4.849-15.848a.5.5 0 010 .707L12.7 12.003l4.146 4.15a.498.498 0 01-.014.706.497.497 0 01-.693 0l-4.146-4.149-4.135 4.136a.5.5 0 01-.707-.707l4.135-4.136-4.135-4.132a.5.5 0 01.707-.707l4.135 4.136 4.15-4.15a.497.497 0 01.703 0z"
      ></path>
    </svg>
  );
};

CancelLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CancelLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CancelLight;
