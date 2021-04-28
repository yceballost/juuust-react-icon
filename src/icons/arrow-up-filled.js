import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpFilled = props => {
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
      <path d="M21.7 11.846c0 .151-.028.3-.084.44-.176.434-.602.7-1.106.694l-3.65.003c-.02.011-.04.023-.056.04l-.02 6.882c.009.616-.145 1.07-.467 1.383-.323.314-.776.46-1.393.443H8.882c-.42.008-1.025-.03-1.445-.437-.42-.406-.48-1.008-.487-1.426v-.008l.002-6.711a.452.452 0 00-.053-.157l-3.563.005H3.33c-.857-.005-1.148-.414-1.246-.658-.168-.417-.014-.9.42-1.322l8.712-8.658c.084-.087.33-.337.689-.334.151 0 .378.05.594.275l8.703 8.481c.325.3.498.69.498 1.065z"></path>
    </svg>
  );
};

ArrowUpFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowUpFilled;
