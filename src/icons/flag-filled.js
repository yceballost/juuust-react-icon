import React from 'react';
import PropTypes from 'prop-types';

const FlagFilled = props => {
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
      <path d="M17.443 7.465a.16.16 0 01-.006-.227l3.14-3.134c.305-.392.356-.928.134-1.373a1.305 1.305 0 00-1.176-.728H4.992a1.31 1.31 0 00-1.314 1.305v17.745c0 .317.258.575.577.575.32 0 .577-.258.577-.575V12.71h14.7c.504 0 .955-.28 1.177-.729.224-.45.17-.974-.182-1.425.002 0-3.084-3.09-3.084-3.09z"></path>
    </svg>
  );
};

FlagFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FlagFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FlagFilled;
