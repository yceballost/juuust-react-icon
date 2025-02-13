import React from 'react';
import PropTypes from 'prop-types';

const LocationLight = props => {
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
        d="M19 9.152c.014-4.465-2.596-7.138-6.98-7.152h-.031C7.627 2 5.014 4.655 5 9.11c-.014 4.39 5.318 11.38 6.685 12.767l.006.005c.16.16.416.157.573-.006 1.367-1.391 6.722-8.378 6.736-12.724zm-.819-.003c-.01 3.82-4.648 10.05-6.206 11.825-1.553-1.773-6.168-8.005-6.157-11.859.012-4.053 2.203-6.281 6.17-6.281h.032c3.985.011 6.173 2.254 6.162 6.315zM12 10.407c1.094 0 1.673-.589 1.673-1.705 0-1.115-.579-1.704-1.673-1.704s-1.676.589-1.676 1.704c0 1.116.58 1.705 1.676 1.705zm2.492-1.705c0-1.588-.931-2.538-2.492-2.538-1.56 0-2.492.95-2.492 2.538 0 1.588.931 2.539 2.492 2.539 1.56 0 2.492-.95 2.492-2.539z"
      ></path>
    </svg>
  );
};

LocationLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LocationLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default LocationLight;
