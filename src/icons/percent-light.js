import React from 'react';
import PropTypes from 'prop-types';

const PercentLight = props => {
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
        d="M11.992 2.15c6.22 0 9.848 3.14 9.848 9.848 0 6.707-3.628 9.842-9.848 9.842-6.22 0-9.842-3.135-9.842-9.842 0-6.707 3.623-9.848 9.842-9.848zm0 18.869c5.99 0 9.027-3.034 9.027-9.021 0-5.99-3.037-9.027-9.027-9.027-5.987 0-9.021 3.037-9.021 9.027 0 5.987 3.034 9.021 9.021 9.021zm3.163-6.164c0 .63-.204.835-.837.835-.634 0-.835-.201-.835-.835 0-.633.201-.837.835-.837.633 0 .837.204.837.837zm-.837-1.655c1.045 0 1.658.53 1.658 1.658 0 1.127-.61 1.656-1.658 1.656-1.045 0-1.656-.53-1.656-1.656s.608-1.658 1.656-1.658zm-5.48-3.89c0-.632.204-.837.834-.837s.835.202.838.838c0 .633-.204.835-.838.835-.63 0-.834-.205-.834-.835zm.834 1.654c-1.045 0-1.655-.527-1.655-1.656s.61-1.658 1.655-1.658 1.659.529 1.659 1.658c0 1.13-.614 1.656-1.659 1.656zm6.125-3.183a.41.41 0 00-.073-.574l-.006-.006a.407.407 0 00-.571.076L8.204 16.21a.41.41 0 00.648.502l6.945-8.932z"
      ></path>
    </svg>
  );
};

PercentLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PercentLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PercentLight;
