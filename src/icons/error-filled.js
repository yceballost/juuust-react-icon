import React from 'react';
import PropTypes from 'prop-types';

const ErrorFilled = props => {
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
        d="M21.686 7.885a.795.795 0 00-.033-.182c-.009-.008-.017-.025-.011-.028-.004-.006-.006-.012-.007-.016-.003-.007-.005-.012-.01-.018a.636.636 0 00-.14-.198l-4.97-4.832-.417-.412h-.008a.637.637 0 00-.196-.14h-.017c0-.009-.009-.009-.017-.009a.691.691 0 00-.247-.05H8.067C7.43 2 6.85 2.577 6.85 3.21v4.824l-4.731 9.364c-.073.148-.115.31-.115.484.008.544.45.98.983.98h.008l3.855.01v1.613c0 .641.571 1.201 1.218 1.201H20.46c.661 0 1.227-.552 1.227-1.201v-12.6zm-1.03-.106h-2.35c-.763 0-1.41-.241-1.866-.681-.448-.445-.695-1.064-.695-1.795V3.006l4.91 4.773zm-11.63 7.09a.616.616 0 01-.614-.617V9.78a.614.614 0 111.227 0v4.473a.614.614 0 01-.614.616zm.005 1.607a.644.644 0 010-1.288.644.644 0 010 1.288zm-1.793 1.16l7.294.034L9 6.484l-2.154 4.28-3.462 6.862 3.462.009h.392z"
      ></path>
    </svg>
  );
};

ErrorFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ErrorFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ErrorFilled;
