import React from 'react';
import PropTypes from 'prop-types';

const EmergencyCrossFilled = props => {
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
      <path d="M20.277 8.571l-5.168.003-.003-5.162c0-.737-.574-1.41-1.204-1.41L9.773 2c-.63 0-1.204.672-1.204 1.409l.002 5.165-5.162.003C2.659 8.577 2 9.14 2 9.781v4.13c0 .64.658 1.204 1.409 1.204l5.168-.003.003 5.162c0 .751.563 1.41 1.204 1.41h4.13c.64 0 1.204-.659 1.204-1.41l-.003-5.168 5.162-.002c.737 0 1.41-.575 1.41-1.205V9.77c0-.627-.673-1.199-1.41-1.199z"></path>
    </svg>
  );
};

EmergencyCrossFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EmergencyCrossFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EmergencyCrossFilled;
