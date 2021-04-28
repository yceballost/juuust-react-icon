import React from 'react';
import PropTypes from 'prop-types';

const OpenFileRegular = props => {
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
        d="M19.56 8.584h.807c.742 0 1.347.608 1.345 1.353a.507.507 0 01-.012.112l-1.448 7.947a1.353 1.353 0 01-1.344 1.288H4.138A1.353 1.353 0 012.79 17.93c0-.01.002-.017.003-.025l.003-.02-.77-11.95c0-.798.632-1.414 1.414-1.414h6.129c.781 0 1.417.619 1.417 1.375v.403h7.104c.781 0 1.417.62 1.417 1.376l.064.812a.227.227 0 01-.005.06.352.352 0 00-.006.038zM3.443 5.774H9.57c.107 0 .18.065.18.124v1.028c0 .344.277.624.619.624h7.723c.106 0 .179.065.182.174l.064.86v.003H5.619c-.72 0-1.31.571-1.344 1.288l-.558 3.02-.45-6.995c-.004-.061.07-.126.176-.126zM19.03 17.82a.507.507 0 00-.011.112c0 .06-.048.104-.11.104H4.14a.11.11 0 01-.104-.073l1.463-7.91v-.008c.006-.036.01-.07.01-.107 0-.059.048-.104.11-.104h14.75c.051 0 .09.031.104.073l-1.442 7.913z"
      ></path>
    </svg>
  );
};

OpenFileRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OpenFileRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default OpenFileRegular;
