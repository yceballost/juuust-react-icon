import React from 'react';
import PropTypes from 'prop-types';

const MicrochipFilled = props => {
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
      <path d="M21.236 12.614a.605.605 0 000-1.21h-2.77v-1.21h2.77a.606.606 0 000-1.213h-2.77V6.614c0-.555-.527-1.06-1.107-1.06h-2.325v-2.79a.607.607 0 00-1.213.001v2.784h-1.21V2.768a.604.604 0 10-1.21 0v2.784h-1.21V2.768a.606.606 0 00-1.21 0v2.784H6.653c-.58 0-1.106.504-1.106 1.059v2.367H2.765a.606.606 0 000 1.213h2.779v1.21H2.765a.605.605 0 000 1.21h2.779v1.21H2.765a.606.606 0 000 1.213h2.779v2.392c0 .557.515 1.05 1.106 1.05h2.328v2.762a.605.605 0 001.21 0v-2.762h1.21v2.762a.606.606 0 001.213 0v-2.762h1.21v2.762a.605.605 0 001.21 0v-2.762h2.325c.591 0 1.106-.49 1.106-1.05v-2.392h2.77a.606.606 0 000-1.213h-2.77v-1.21l2.774.003z"></path>
    </svg>
  );
};

MicrochipFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MicrochipFilled.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MicrochipFilled;
