import React from 'react';
import PropTypes from 'prop-types';

const FastForwardLight = props => {
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
        d="M2.156 12.002c0-6.442 3.406-9.846 9.846-9.846 6.437 0 9.84 3.404 9.84 9.846 0 6.437-3.403 9.84-9.84 9.84-6.442 0-9.846-3.403-9.846-9.84zm.824 0c0 5.983 3.036 9.017 9.022 9.017 5.983 0 9.017-3.034 9.017-9.017 0-5.989-3.034-9.022-9.017-9.022-5.989 0-9.022 3.033-9.022 9.022zm10.431 1.983V9.392l3.84 2.308-3.84 2.285zm-.823-5.322a.405.405 0 01.207-.358.419.419 0 01.417.005l5.053 3.04a.41.41 0 010 .705l-5.056 3.012a.43.43 0 01-.21.056h-.002a.41.41 0 01-.41-.412V8.663zm-5.224 5.328V9.397l3.84 2.308-3.84 2.286zM6.54 8.669a.413.413 0 01.625-.353l5.053 3.04a.41.41 0 010 .705l-5.056 3.011a.429.429 0 01-.21.056h-.003a.41.41 0 01-.409-.412V8.67z"
      ></path>
    </svg>
  );
};

FastForwardLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FastForwardLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FastForwardLight;
