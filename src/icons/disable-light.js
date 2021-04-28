import React from 'react';
import PropTypes from 'prop-types';

const DisableLight = props => {
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
        d="M0 12.003C0 3.828 4.415 0 11.997 0 19.577 0 24 3.828 24 12.003 24 20.18 19.578 24 11.997 24 4.415 24 0 20.179 0 12.003zM11.997 1.001c3.425 0 6.047.823 7.874 2.441L3.442 19.872C1.824 18.043 1.001 15.421 1.001 12 1 4.702 4.699 1 11.997 1zm0 21.998c-3.405 0-6.02-.816-7.848-2.42l16.43-16.43c1.604 1.83 2.42 4.443 2.42 7.854C23 19.301 19.298 23 11.997 23z"
      ></path>
    </svg>
  );
};

DisableLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DisableLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DisableLight;
