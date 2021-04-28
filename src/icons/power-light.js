import React from 'react';
import PropTypes from 'prop-types';

const PowerLight = props => {
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
        d="M2.15 11.99c0 6.437 3.403 9.838 9.838 9.838 6.44 0 9.843-3.404 9.84-9.838 0-3.26-.877-5.759-2.602-7.423-1.664-1.605-4.098-2.417-7.238-2.417-6.437 0-9.838 3.403-9.838 9.84zm.56 0c0-6.157 3.123-9.28 9.278-9.28 6.16 0 9.282 3.12 9.28 9.28 0 6.157-3.12 9.277-9.28 9.277-6.157 0-9.278-3.123-9.278-9.277zm9.28 6.042c-1.921 0-3.417-.501-4.44-1.487-1.061-1.025-1.602-2.558-1.602-4.555 0-1.664.376-3.011 1.115-4.005.726-.972 1.793-1.605 3.18-1.88a.28.28 0 01.33.221.28.28 0 01-.221.33c-2.55.508-3.843 2.303-3.843 5.337 0 3.639 1.843 5.482 5.481 5.482 3.639 0 5.485-1.843 5.485-5.482 0-3.073-1.33-4.877-3.95-5.356a.28.28 0 01.101-.549c1.42.26 2.518.885 3.264 1.86.761.997 1.148 2.359 1.148 4.048 0 1.997-.54 3.53-1.602 4.554-1.028.98-2.524 1.482-4.446 1.482zm-.28-9.075c0 .154.126.28.28.28.154 0 .28-.126.28-.28V4.859a.281.281 0 00-.28-.28.281.281 0 00-.28.28v4.098z"
      ></path>
    </svg>
  );
};

PowerLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PowerLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PowerLight;
