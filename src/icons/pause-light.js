import React from 'react';
import PropTypes from 'prop-types';

const PauseLight = props => {
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
        d="M11.998 21.838c-6.435 0-9.838-3.4-9.838-9.838 0-6.437 3.4-9.84 9.838-9.84 3.14 0 5.574.812 7.238 2.417C20.96 6.241 21.838 8.74 21.838 12c.003 6.434-3.4 9.838-9.84 9.838zm0-19.118C5.844 2.72 2.72 5.843 2.72 12c0 6.154 3.12 9.278 9.278 9.278 6.16 0 9.28-3.12 9.28-9.278.003-6.16-3.12-9.28-9.28-9.28zm3 13.703a.28.28 0 01-.28-.28V7.81a.28.28 0 01.28-.28c.154 0 .28.126.28.28v8.333a.28.28 0 01-.28.28zm-6.045.028a.28.28 0 01-.28-.28V7.838a.28.28 0 01.28-.28.28.28 0 01.28.28v8.333a.28.28 0 01-.28.28z"
      ></path>
    </svg>
  );
};

PauseLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PauseLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PauseLight;
