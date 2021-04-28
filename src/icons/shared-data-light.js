import React from 'react';
import PropTypes from 'prop-types';

const SharedDataLight = props => {
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
      <path d="M9.766 11.116a.287.287 0 01-.128-.544l4.476-2.25a.285.285 0 01.382.132c.068.14.011.31-.126.38l-4.476 2.253a.297.297 0 01-.128.029z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.053 8.614c0-.818.467-1.199 1.187-1.199s1.186.38 1.18 1.2c0 .391-.107.683-.298.88-.205.215-.512.318-.885.318s-.678-.103-.885-.317c-.19-.198-.3-.49-.3-.882zm1.058 4.797c.04.02.086.031.129.031.108 0 .207-.06.253-.16a.288.288 0 00-.128-.383l-4.477-2.25a.283.283 0 00-.378.126.289.289 0 00.125.386l4.476 2.25z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.58 10.867c0-.819.466-1.2 1.186-1.2.717 0 1.184.381 1.181 1.2 0 .392-.108.684-.299.881-.205.215-.512.318-.885.318s-.677-.103-.885-.318c-.19-.197-.299-.49-.299-.881zm4.473 2.25c0-.82.467-1.2 1.187-1.2s1.186.38 1.18 1.2c0 .391-.107.683-.298.88-.205.215-.512.318-.885.318s-.678-.103-.885-.317c-.19-.198-.3-.49-.3-.882z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.94 16.733H5.069c-1.03 0-1.813-.3-2.328-.892-.487-.561-.731-1.386-.731-2.453V8.343c0-1.068.244-1.892.73-2.45C3.256 5.3 4.039 5 5.069 5H18.94c1.03 0 1.813.3 2.328.893.483.558.731 1.382.731 2.45v5.045c0 1.067-.245 1.892-.731 2.45-.515.595-1.298.895-2.328.895zM5.069 5.573c-1.7 0-2.49.88-2.49 2.772v5.046c0 1.892.79 2.773 2.49 2.773H18.94c1.699 0 2.49-.882 2.49-2.773V8.343c0-1.892-.791-2.77-2.49-2.77H5.068zM2.285 19h19.422a.286.286 0 000-.572H2.285a.286.286 0 000 .572z"
      ></path>
    </svg>
  );
};

SharedDataLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SharedDataLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SharedDataLight;
