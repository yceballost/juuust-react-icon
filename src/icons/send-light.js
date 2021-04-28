import React from 'react';
import PropTypes from 'prop-types';

const SendLight = props => {
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
        d="M4 4.701a.704.704 0 011.018-.628l15.592 7.755a.707.707 0 01.002 1.26L5.05 20.925a.705.705 0 01-1.006-.772l1.584-7.711-1.611-7.59A.62.62 0 014 4.701zm16.296 7.755L4.704 4.704l1.645 7.733-1.616 7.857 15.563-7.838z"
      ></path>
    </svg>
  );
};

SendLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SendLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SendLight;
