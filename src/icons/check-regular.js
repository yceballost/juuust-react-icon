import React from 'react';
import PropTypes from 'prop-types';

const CheckRegular = props => {
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
      <path d="M9.416 19.5a.997.997 0 01-.77-.353l-5.033-6.065a.916.916 0 01.155-1.322 1.012 1.012 0 011.379.149L9.39 17.02 19.633 3.877a1.01 1.01 0 011.373-.19.915.915 0 01.198 1.317L10.207 19.121a.988.988 0 01-.77.379h-.02z"></path>
    </svg>
  );
};

CheckRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CheckRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CheckRegular;
