import React from 'react';
import PropTypes from 'prop-types';

const DownloadAppFilled = props => {
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
        d="M17.695 2.832C17.15 2.272 16.35 2 15.24 2H8.602c-2.157 0-3.25 1.106-3.25 3.291v13.104c0 2.216 1.063 3.291 3.25 3.291h6.639c2.188 0 3.25-1.075 3.25-3.291V5.29c0-1.106-.261-1.91-.796-2.46zm-4.947 16.221c-.196.199-.48.305-.82.305-.343 0-.628-.106-.822-.305-.193-.199-.288-.47-.288-.81 0-.697.415-1.114 1.112-1.114.697 0 1.11.417 1.11 1.115-.004.339-.102.61-.292.81zM12.3 15.74l3.308-3.81a.5.5 0 00-.381-.83h-1.49V6.234c.005-.03.005-.058.005-.09a.872.872 0 00-.874-.868h-1.834a.912.912 0 00-.743.289.853.853 0 00-.232.616v4.922H8.622a.506.506 0 00-.328.123.498.498 0 00-.05.706l3.3 3.81a.502.502 0 00.756 0z"
      ></path>
    </svg>
  );
};

DownloadAppFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DownloadAppFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DownloadAppFilled;
