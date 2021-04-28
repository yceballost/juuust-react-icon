import React from 'react';
import PropTypes from 'prop-types';

const ExportRegular = props => {
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
        d="M5.492 8.724a.842.842 0 001.437.59l4.277-4.282v11.05a.845.845 0 001.69 0V5.032l4.21 4.213.007.008.015.014a.845.845 0 001.17-1.216l-5.65-5.655a.847.847 0 00-1.193 0L5.738 8.124a.858.858 0 00-.246.6zm16.344 8.182a.844.844 0 00-.843-.843.84.84 0 00-.84.843v3.243H3.839v-3.243a.845.845 0 00-1.689 0v4.086c0 .465.378.844.843.844h18a.844.844 0 00.843-.844v-4.086z"
      ></path>
    </svg>
  );
};

ExportRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ExportRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ExportRegular;
