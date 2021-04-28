import React from 'react';
import PropTypes from 'prop-types';

const KebabMenuLight = props => {
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
        d="M11.914 7.065c-1.277 0-2.314-1.1-2.314-2.459 0-1.36 1.037-2.456 2.314-2.456 1.277 0 2.312 1.1 2.312 2.459 0 1.36-1.035 2.456-2.312 2.456zm0 7.374c-1.277 0-2.314-1.1-2.314-2.46 0-1.359 1.035-2.458 2.314-2.458 1.277 0 2.312 1.1 2.312 2.459 0 1.36-1.035 2.459-2.312 2.459zM9.6 19.354c0 1.357 1.037 2.456 2.314 2.456 1.277 0 2.312-1.097 2.312-2.456 0-1.36-1.035-2.46-2.312-2.46-1.28 0-2.314 1.103-2.314 2.46z"
      ></path>
    </svg>
  );
};

KebabMenuLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

KebabMenuLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default KebabMenuLight;
