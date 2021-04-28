import React from 'react';
import PropTypes from 'prop-types';

const EyeLight = props => {
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
        d="M21.905 11.747a.39.39 0 01.002.508c-.199.235-4.945 5.745-9.88 5.745-4.931 0-9.729-5.507-9.931-5.742a.388.388 0 010-.51C2.296 11.511 7.067 6 12.002 6c4.928.003 9.7 5.512 9.903 5.747zM12.027 17.2c3.967 0 8.014-4.12 9.004-5.196-.993-1.076-5.065-5.198-9.03-5.198-3.966 0-8.033 4.12-9.028 5.198.998 1.074 5.09 5.196 9.054 5.196zm2.547-5.114c0-2.273-1.96-2.464-2.467-2.475a3.74 3.74 0 00-.247 0c-.516.003-2.44.172-2.44 2.461 0 2.292 1.941 2.473 2.46 2.478a3.577 3.577 0 00.236 0c.492-.011 2.458-.189 2.458-2.464z"
      ></path>
    </svg>
  );
};

EyeLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EyeLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default EyeLight;
