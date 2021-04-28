import React from 'react';
import PropTypes from 'prop-types';

const PercentFilled = props => {
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
        d="M21.836 11.996c0-6.706-3.627-9.846-9.846-9.846-6.218 0-9.84 3.14-9.84 9.846 0 6.706 3.622 9.84 9.84 9.84 6.219 0 9.846-3.134 9.846-9.84zm-6.014-4.947a.575.575 0 01.101.807l-6.947 8.927a.571.571 0 01-.804.1.573.573 0 01-.1-.806l6.944-8.927a.572.572 0 01.806-.101zm.149 7.779c0 1.129-.61 1.655-1.656 1.655-1.047 0-1.655-.526-1.655-1.655 0-1.13.61-1.656 1.655-1.656s1.656.527 1.656 1.656zm-6.3-7.202c-1.048 0-1.655.53-1.655 1.656s.607 1.655 1.655 1.655c1.045 0 1.655-.53 1.655-1.655 0-1.13-.61-1.656-1.655-1.656z"
      ></path>
    </svg>
  );
};

PercentFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PercentFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PercentFilled;
