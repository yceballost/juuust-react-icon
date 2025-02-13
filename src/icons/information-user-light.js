import React from 'react';
import PropTypes from 'prop-types';

const InformationUserLight = props => {
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
        d="M23 12.037C23 1.832 14.71 1.033 12.5 1.002a35.82 35.82 0 00-1.004.003C9.396 1.043 1 1.832 1 11.971c0 10.115 8.386 10.966 10.543 11.02.254.006.548.009.83.009h.21C14.788 22.981 23 22.224 23 12.037zm-.917 0c0 4-1.33 6.868-3.954 8.518-2.15 1.352-4.601 1.518-5.556 1.528h-.204c-.275 0-.56-.003-.807-.01-.958-.025-3.428-.225-5.613-1.596-2.676-1.675-4.032-4.54-4.032-8.506 0-9.16 7.344-10.008 9.595-10.049.325-.006.65-.006.976-.003.961.013 3.431.194 5.604 1.562 2.648 1.669 3.99 4.549 3.99 8.556zM12.006 9.495c.254 0 .457.207.457.457v7.15a.458.458 0 01-.914 0V9.955a.456.456 0 01.457-.46zm.708-1.884a.713.713 0 10-1.427-.001.713.713 0 001.427 0z"
      ></path>
    </svg>
  );
};

InformationUserLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InformationUserLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default InformationUserLight;
