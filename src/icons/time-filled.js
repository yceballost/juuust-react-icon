import React from 'react';
import PropTypes from 'prop-types';

const TimeFilled = props => {
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
        d="M2.15 11.996c0-6.706 3.622-9.846 9.84-9.846 6.219 0 9.846 3.14 9.846 9.846 0 6.706-3.627 9.84-9.846 9.84-6.218 0-9.84-3.134-9.84-9.84zm12.874 3.913a.61.61 0 00.434-.18.62.62 0 00.006-.87l-2.852-2.85V8.165a.616.616 0 10-1.232 0v4.1c0 .166.064.323.179.438l3.03 3.028c.121.117.275.179.435.179z"
      ></path>
    </svg>
  );
};

TimeFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TimeFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default TimeFilled;
