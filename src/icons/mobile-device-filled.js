import React from 'react';
import PropTypes from 'prop-types';

const MobileDeviceFilled = props => {
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
        d="M15.24 2c1.11 0 1.911.272 2.455.832.535.549.795 1.353.795 2.46v13.103c0 2.216-1.061 3.291-3.25 3.291H8.603c-2.187 0-3.25-1.075-3.25-3.291V5.291C5.353 3.106 6.446 2 8.603 2h6.639zm-3.313 17.358c.342 0 .625-.106.82-.305.191-.199.29-.47.292-.81 0-.697-.412-1.114-1.109-1.114-.697 0-1.112.417-1.112 1.115 0 .339.095.61.288.81.194.198.48.305.821.305z"
      ></path>
    </svg>
  );
};

MobileDeviceFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MobileDeviceFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MobileDeviceFilled;
