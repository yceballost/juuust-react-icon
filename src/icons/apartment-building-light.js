import React from 'react';
import PropTypes from 'prop-types';

const ApartmentBuildingLight = props => {
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
        d="M19.387 3.36c0-.63-.583-1.204-1.219-1.204H5.838c-.636 0-1.216.574-1.213 1.202V20.64c0 .639.569 1.202 1.216 1.202h12.33c.647 0 1.216-.564 1.216-1.202V3.36zm-.812 17.28V3.36c0-.176-.219-.383-.407-.383H5.838c-.185 0-.406.207-.406.38v17.281c0 .188.204.384.406.384h4.05v-4.686c0-.227.182-.41.406-.41h3.42c.225 0 .407.185.407.41v4.686h4.05c.2 0 .404-.194.404-.381zm-7.874.354h2.607v-4.25h-2.607v4.25zM8.535 7.372h1.776V5.576H8.533v1.796h.002zm2.589-2.207a.409.409 0 00-.407-.41h-2.59a.407.407 0 00-.407.41V7.78c0 .224.182.409.406.409h2.591a.407.407 0 00.407-.41V5.166zm2.529 2.207h1.779V5.576h-1.779v1.796zm2.588-2.207a.409.409 0 00-.406-.41h-2.588a.405.405 0 00-.406.41V7.78c0 .224.182.409.406.409h2.588a.405.405 0 00.406-.41V5.166zm-7.706 7.344h1.78v-1.795h-1.78v1.795zm2.589-2.207a.407.407 0 00-.407-.41h-2.59a.407.407 0 00-.407.41v2.616c0 .224.182.41.406.41h2.591a.407.407 0 00.407-.41v-2.616zm2.529 2.207h1.779v-1.795h-1.779v1.795zm2.588-2.207a.407.407 0 00-.406-.41l-2.588-.002a.405.405 0 00-.406.41v2.618c0 .227.182.41.406.41h2.588a.405.405 0 00.406-.41v-2.616z"
      ></path>
    </svg>
  );
};

ApartmentBuildingLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ApartmentBuildingLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ApartmentBuildingLight;
