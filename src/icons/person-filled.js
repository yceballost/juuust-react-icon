import React from 'react';
import PropTypes from 'prop-types';

const PersonFilled = props => {
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
        d="M9.278 4.642c0 1.549.936 2.476 2.499 2.476 1.569-.003 2.501-.927 2.501-2.48 0-.792-.232-1.414-.686-1.848-.437-.417-1.048-.63-1.815-.63-.765 0-1.375.213-1.815.633-.454.434-.684 1.056-.684 1.849zm6.947 11.263a1.52 1.52 0 001.078-1.857s-1.14-4.165-1.14-4.171a.857.857 0 00-.058-.188c-.286-1.291-1.457-2.224-2.799-2.224h-2.563c-1.341 0-2.515.936-2.8 2.23a.887.887 0 00-.048.146L6.74 14.05a1.516 1.516 0 001.073 1.851c.39.112.804.059 1.163-.14l.039-.025v4.594c0 .851.622 1.493 1.445 1.493.818 0 1.415-.628 1.415-1.493v-4.454h.28v4.454c0 .863.616 1.515 1.434 1.515.821 0 1.44-.652 1.44-1.515v-4.594c.358.221.793.28 1.196.168z"
      ></path>
    </svg>
  );
};

PersonFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PersonFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PersonFilled;
