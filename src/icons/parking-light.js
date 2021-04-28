import React from 'react';
import PropTypes from 'prop-types';

const ParkingLight = props => {
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
        d="M20.25 8.524c.017-2.109-.537-3.7-1.621-4.725a5.502 5.502 0 00-2.535-1.266 15.894 15.894 0 00-3.748-.37H5.909a.41.41 0 00-.409.41v18.859a.41.41 0 00.409.409h4.275a.408.408 0 00.408-.409v-6.1H13.2a10.295 10.295 0 003.26-.46 5.264 5.264 0 002.284-1.493 7.095 7.095 0 001.507-4.855zm-.798-.008a6.354 6.354 0 01-1.297 4.305 4.402 4.402 0 01-1.94 1.267 9.382 9.382 0 01-3.015.417h-3.014a.407.407 0 00-.406.409v6.112H6.315V2.98h6.03c1.205-.025 2.41.09 3.586.345a4.765 4.765 0 012.143 1.09c.913.82 1.378 2.237 1.378 4.1zM13.895 5.44c.454.09.874.3 1.221.608.605.698.9 1.614.815 2.535a3.696 3.696 0 01-.888 2.69c-.31.316-.697.548-1.123.672a6.644 6.644 0 01-1.63.165h-2.104a.405.405 0 01-.406-.41V5.688c0-.227.182-.409.406-.409h1.998a7.642 7.642 0 011.711.162zm1.216 3.166a2.924 2.924 0 01-.645 2.084c-.21.218-.473.378-.767.46a5.68 5.68 0 01-1.443.14h-1.658V6.095h1.588c.513 0 1.023.056 1.524.165.303.059.585.202.815.41a2.63 2.63 0 01.586 1.935z"
      ></path>
    </svg>
  );
};

ParkingLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ParkingLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ParkingLight;
