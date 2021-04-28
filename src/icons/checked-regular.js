import React from 'react';
import PropTypes from 'prop-types';

const CheckedRegular = props => {
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
        d="M11.997 23c-3.495 0-6.213-.912-8.079-2.711C1.981 18.424 1 15.637 1 12.005c0-3.633.981-6.423 2.918-8.29C5.784 1.914 8.505 1 11.998 1c3.495 0 6.213.912 8.081 2.711C22.018 5.58 23 8.37 23 12.001c0 3.633-.984 6.42-2.922 8.288C18.21 22.088 15.492 23 11.997 23zm0-20.78c-6.49 0-9.78 3.29-9.78 9.785 0 6.488 3.29 9.779 9.78 9.779 6.492 0 9.787-3.291 9.787-9.78 0-6.49-3.295-9.785-9.787-9.785zm-2.05 14.42c.11.138.276.217.451.217h.013a.572.572 0 00.451-.232l6.452-8.639a.575.575 0 10-.922-.69l-6.01 8.044-2.489-3.128a.577.577 0 00-.9.718l2.954 3.71z"
      ></path>
    </svg>
  );
};

CheckedRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CheckedRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CheckedRegular;
