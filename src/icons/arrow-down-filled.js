import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownFilled = props => {
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
      <path d="M2.02 11.913c0-.151.028-.3.084-.44.176-.434.602-.7 1.106-.694l3.65-.003a.253.253 0 00.056-.04l.02-6.882c-.009-.616.145-1.07.467-1.383.323-.314.78-.463 1.393-.443h6.042c.42-.008 1.025.03 1.445.437.42.406.482 1.008.487 1.426v.008l-.003 6.712a.455.455 0 00.054.156l3.563-.005h.005c.858.005 1.149.415 1.247.658.168.418.014.9-.42 1.322l-8.712 8.659c-.084.086-.33.336-.689.333a.82.82 0 01-.594-.275L2.513 12.98c-.32-.305-.493-.691-.493-1.067z"></path>
    </svg>
  );
};

ArrowDownFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowDownFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ArrowDownFilled;
