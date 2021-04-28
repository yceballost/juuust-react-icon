import React from 'react';
import PropTypes from 'prop-types';

const FolderLight = props => {
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
        d="M3.408 20.168H20.51a1.27 1.27 0 001.28-1.26V7.322a1.269 1.269 0 00-.378-.896 1.257 1.257 0 00-.899-.361h-8.538V5.07a1.269 1.269 0 00-.378-.896 1.257 1.257 0 00-.9-.361H3.409A1.262 1.262 0 002.156 5.07v13.84a1.266 1.266 0 001.252 1.258zM2.974 5.07c0-.24.196-.437.434-.437h7.286c.23.014.409.205.409.437v1.407a.41.41 0 00.409.411h9a.433.433 0 01.431.437v11.586a.437.437 0 01-.431.437H3.408a.435.435 0 01-.434-.437V5.07z"
      ></path>
    </svg>
  );
};

FolderLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FolderLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FolderLight;
