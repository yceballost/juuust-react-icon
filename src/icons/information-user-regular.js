import React from 'react';
import PropTypes from 'prop-types';

const InformationUserRegular = props => {
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
        d="M23 12.034C23 1.833 14.714 1.031 12.504 1c-.335 0-.673 0-1.008.006C9.396 1.044 1 1.833 1 11.97c0 10.117 8.386 10.968 10.543 11.019.254.009.548.012.83.012h.21C14.788 22.981 23 22.224 23 12.034zm-1.374 0c0 8.584-6.333 9.567-9.056 9.592 0 0-.197 0-.197-.003-.273 0-.555-.004-.799-.01-2.767-.066-9.2-1.14-9.2-9.644 0-8.502 6.395-9.538 9.147-9.589.32-.006.642-.006.961-.003 2.752.038 9.144 1.058 9.144 9.657zm-9.62-2.77c.379 0 .689.307.689.689v7.15a.689.689 0 11-1.377 0v-7.15a.69.69 0 01.688-.689zM12.77 7.6a.73.73 0 00-.758-.708.74.74 0 00-.71.708.736.736 0 00.707.757h.054a.73.73 0 00.707-.757z"
      ></path>
    </svg>
  );
};

InformationUserRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InformationUserRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InformationUserRegular;
