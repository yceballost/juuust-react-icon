import React from 'react';
import PropTypes from 'prop-types';

const AppsFilled = props => {
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
        d="M6.355 2.15H3.13c-.54 0-.98.44-.98.98v3.224c0 .541.44.98.98.98h3.225c.54 0 .98-.439.98-.98V3.13c0-.54-.44-.98-.98-.98zm4.027 0h3.225c.54 0 .98.44.98.98v3.224c0 .541-.44.98-.98.98h-3.224c-.541 0-.98-.439-.98-.98V3.13c0-.54.436-.98.98-.98zm7.25 0h3.224c.54 0 .98.44.98.98v3.224c0 .541-.44.98-.98.98h-3.224c-.54 0-.98-.439-.98-.98V3.13c0-.54.44-.98.98-.98zm0 7.252h3.224c.54 0 .98.44.98.98v3.225c0 .54-.44.98-.98.98h-3.224c-.54 0-.98-.44-.98-.98v-3.224c0-.544.44-.98.98-.98zm-4.025 0h-3.224a.978.978 0 00-.98.98v3.225c0 .54.439.98.98.98h3.224c.54 0 .98-.44.98-.98v-3.224c0-.541-.44-.98-.98-.98zm-10.477 0h3.225c.54 0 .98.44.98.98v3.225c0 .54-.44.98-.98.98H3.13c-.54 0-.98-.44-.98-.98v-3.224c0-.544.44-.98.98-.98zm10.477 7.25h-3.224a.98.98 0 00-.98.98v3.224c0 .54.439.98.98.98h3.224c.54 0 .98-.44.98-.98v-3.224c0-.54-.44-.98-.98-.98zm4.002 0h3.224c.541 0 .98.44.98.98v3.224c0 .54-.439.98-.98.98H17.61c-.54 0-.98-.44-.98-.98v-3.224c0-.54.437-.98.98-.98zm-11.254 0H3.13c-.54 0-.98.44-.98.98v3.224c0 .54.44.98.98.98h3.225c.54 0 .98-.44.98-.98v-3.224c0-.54-.44-.98-.98-.98z"
      ></path>
    </svg>
  );
};

AppsFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AppsFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AppsFilled;
