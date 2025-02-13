import React from 'react';
import PropTypes from 'prop-types';

const MobileDeviceRegular = props => {
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
        d="M15.238 2H8.47C6.289 2 5 3.243 5 5.472v13.376c0 2.23 1.289 3.473 3.47 3.473h6.768c2.182 0 3.47-1.244 3.47-3.473V5.472c0-2.23-1.288-3.472-3.47-3.472zM8.47 3.5h6.767c1.366 0 1.97.584 1.97 1.972v13.376c0 1.389-.605 1.973-1.97 1.973H8.47c-1.365 0-1.971-.584-1.971-1.973V5.472c0-1.388.605-1.972 1.97-1.972zm2.376 13.66c0-.683.397-1 1.007-1 .61 0 1.007.317 1.007 1 0 .328-.092.572-.254.735-.177.18-.436.265-.753.265s-.576-.085-.753-.265c-.162-.163-.254-.407-.254-.735z"
      ></path>
    </svg>
  );
};

MobileDeviceRegular.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MobileDeviceRegular.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MobileDeviceRegular;
