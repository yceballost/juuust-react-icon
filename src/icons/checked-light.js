import React from 'react';
import PropTypes from 'prop-types';

const CheckedLight = props => {
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
        d="M11.998 23C4.805 23 1 19.198 1 12.002 1 4.805 4.802 1 11.998 1c3.511 0 6.232.908 8.093 2.703C22.02 5.563 23 8.356 23 12.002 23.003 19.195 19.198 23 11.998 23zm0-21.374c-6.88 0-10.372 3.492-10.372 10.376 0 6.88 3.489 10.372 10.372 10.372 6.887 0 10.376-3.489 10.376-10.372.003-6.887-3.489-10.376-10.376-10.376zM10.107 16.73c.053.072.14.116.235.116.09 0 .178-.044.235-.116l6.864-8.872a.298.298 0 00-.053-.416.298.298 0 00-.417.053l-6.63 8.565-2.652-3.466a.296.296 0 00-.416-.057.296.296 0 00-.057.417l2.89 3.776z"
      ></path>
    </svg>
  );
};

CheckedLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CheckedLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CheckedLight;
