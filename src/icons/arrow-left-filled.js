import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeftFilled = props => {
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
      <path d="M11.826 2.011c.152 0 .3.028.44.084.434.177.7.602.695 1.107l.003 3.65c.01.02.022.039.039.056l6.882.02c.616-.01 1.07.145 1.384.467.314.322.46.776.443 1.392v6.042c.008.42-.031 1.025-.438 1.445-.406.42-1.008.482-1.425.488h-.009l-6.711-.003a.453.453 0 00-.157.053l.006 3.563v.003c-.006.857-.415 1.149-.659 1.247-.417.168-.899.014-1.322-.42L2.34 12.492c-.087-.084-.336-.33-.333-.69a.82.82 0 01.274-.593l8.48-8.706c.302-.32.691-.493 1.066-.493z"></path>
    </svg>
  );
};

ArrowLeftFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowLeftFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowLeftFilled;
