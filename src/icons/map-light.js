import React from 'react';
import PropTypes from 'prop-types';

const MapLight = props => {
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
        d="M16.92 2.166l4.582.753a.407.407 0 01.341.406v17.359a.409.409 0 01-.476.403l-4.487-.74-4.76 1.48a.39.39 0 01-.246-.003l-4.56-1.476-4.68.736-.007.001a.41.41 0 01-.467-.404V3.325a.41.41 0 01.347-.406l4.776-.753h.014c.005.002.01.002.014.002a.163.163 0 00.016-.004c.007-.002.014-.004.02-.004.019 0 .036.005.053.01l.029.007h.019c.009 0 .018 0 .026.003l4.532 1.467 4.728-1.47c.008-.003.017-.003.026-.003h.02a.215.215 0 00.03-.007c.014-.003.028-.007.045-.007a.05.05 0 01.018.004c.005.002.011.004.018.004a.04.04 0 00.01-.001c.005-.002.011-.003.018-.001zM2.98 3.676L6.94 3.05v16.526l-3.958.625V3.675zm18.046 16.523l-3.762-.619V3.053l3.762.62v16.526zM16.443 3.126l-4.03 1.255v16.496l4.03-1.252V3.126zm-8.684.009l3.835 1.243v16.493L7.76 19.628V3.135z"
      ></path>
    </svg>
  );
};

MapLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MapLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MapLight;
