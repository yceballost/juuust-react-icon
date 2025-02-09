import React from 'react';
import PropTypes from 'prop-types';

const OpenFileLight = props => {
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
        d="M19.607 8.323h1.079c.638 0 1.157.527 1.157 1.17 0 .026-.003.051-.006.074l-1.518 8.753c.005.574-.513 1.101-1.149 1.101H4.095a1.166 1.166 0 01-1.157-1.174l.005-.025-.787-12.344c0-.687.55-1.222 1.227-1.222h6.255c.675 0 1.227.535 1.227 1.194v.635h7.465c.675 0 1.227.535 1.227 1.194l.05.644zM2.98 5.85c0-.194.18-.353.403-.353h6.255c.221 0 .4.156.4.353v1.056c0 .232.185.42.412.42h7.883c.221 0 .4.16.403.383l.048.614H5.635c-.636 0-1.154.527-1.148 1.098L3.55 14.76 2.98 5.85zM19.5 18.247c0 .182-.148.33-.33.33H4.095c-.182 0-.33-.148-.337-.257l1.547-8.826a.33.33 0 01.33-.33H20.69a.33.33 0 01.327.299l-1.515 8.784z"
      ></path>
    </svg>
  );
};

OpenFileLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OpenFileLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default OpenFileLight;
