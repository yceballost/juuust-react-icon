import React from 'react';
import PropTypes from 'prop-types';

const RewindLight = props => {
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
        d="M2.15 11.99c0 6.437 3.403 9.838 9.838 9.838 6.44 0 9.843-3.404 9.84-9.838 0-3.26-.877-5.759-2.602-7.423-1.664-1.605-4.098-2.417-7.238-2.417-6.437 0-9.838 3.403-9.838 9.84zm.56 0c0-6.157 3.123-9.28 9.278-9.28 6.16 0 9.282 3.12 9.28 9.28 0 6.157-3.12 9.277-9.28 9.277-6.157 0-9.278-3.123-9.278-9.277zm8.264 3.216c.044.025.092.04.142.04a.252.252 0 00.135-.04.278.278 0 00.143-.244v-3.134a.284.284 0 00.1.103l5.508 3.278c.044.025.092.039.142.039a.278.278 0 00.28-.28V8.382c0-.1-.055-.193-.142-.243a.277.277 0 00-.283.003l-5.507 3.308a.275.275 0 00-.098.101V8.377c0-.101-.056-.193-.143-.244a.277.277 0 00-.283.003l-5.507 3.308a.28.28 0 00.003.482l5.51 3.28zm-.14-.734l-4.681-2.787 4.68-2.812v5.599zm1.35-2.781l4.68 2.787v-5.6l-4.68 2.813z"
      ></path>
    </svg>
  );
};

RewindLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RewindLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default RewindLight;
