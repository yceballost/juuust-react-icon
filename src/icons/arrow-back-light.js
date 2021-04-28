import React from 'react';
import PropTypes from 'prop-types';

const ArrowBackLight = props => {
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
      <path d="M19.529 11.62H5.518l6.448-6.783a.47.47 0 00-.208-.829.477.477 0 00-.473.19L4.084 11.77a.128.128 0 00-.048.066.414.414 0 000 .075.463.463 0 000 .357.414.414 0 000 .075.263.263 0 00.048.075l7.069 7.43a.453.453 0 00.35.15.46.46 0 00.33-.79l-6.315-6.65h14.01a.47.47 0 00.472-.47.472.472 0 00-.471-.469c0 .003 0 .003 0 0z"></path>
    </svg>
  );
};

ArrowBackLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowBackLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowBackLight;
