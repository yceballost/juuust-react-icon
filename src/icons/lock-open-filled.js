import React from 'react';
import PropTypes from 'prop-types';

const LockOpenFilled = props => {
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
        d="M19.284 11.095c.002 0 .002 1.29.002 2.9l.001 4.809c0 .896-.272 1.608-.812 2.118-.882.834-2.15.764-2.236.759h-.002l-8.717.005c-.986 0-1.757-.294-2.289-.874-.774-.843-.707-1.975-.703-2.035v-.001l-.003-7.74c0-.904.278-1.621.82-2.128.508-.474 1.141-.645 1.6-.704v-1.19c0-3.664 2.44-4.992 4.723-5.014l.226.001.208.002c1.838.045 4.014.997 4.602 3.538a.603.603 0 01-.442.725.599.599 0 01-.717-.448c-.546-2.359-2.796-2.594-3.474-2.61-.12-.004-.263-.004-.395-.004-1.064.009-3.543.401-3.543 3.807v1.165c1.625-.002 6.04-.008 8.14-.008 1.006 0 1.787.297 2.322.885.76.837.695 1.943.69 2.038v.004zm-7.417 5.168h-.207c-1.356-.02-1.356-1.087-1.356-1.487 0-.398 0-1.457 1.33-1.47h.129l.082.002c1.375.034 1.375 1.126 1.375 1.485.003.395.003 1.448-1.353 1.47zm-.188-4.162c.067 0 .137 0 .196.003.518.014 2.538.22 2.544 2.689 0 2.476-2.026 2.67-2.53 2.678h-.243c-.533-.009-2.53-.202-2.53-2.695 0-2.485 1.978-2.67 2.51-2.675h.053z"
      ></path>
    </svg>
  );
};

LockOpenFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LockOpenFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LockOpenFilled;
